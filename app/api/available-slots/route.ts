import { NextResponse } from 'next/server';

// Mock data for available time slots
const OPENING_HOUR = 11; // Restaurant opens at 11 AM
const CLOSING_HOUR = 22; // Restaurant closes at 10 PM
const SLOT_DURATION = 30; // 30 minutes per slot

// Helper function to generate time slots
function generateTimeSlots(date: string) {
  const slots = [];
  const requestedDate = new Date(date);
  const today = new Date();
  
  // If date is today, start from next available slot
  let startHour = OPENING_HOUR;
  let startMinute = 0;
  
  if (requestedDate.toDateString() === today.toDateString()) {
    const currentHour = today.getHours();
    const currentMinute = today.getMinutes();
    
    if (currentHour >= OPENING_HOUR) {
      startHour = currentHour;
      startMinute = Math.ceil(currentMinute / SLOT_DURATION) * SLOT_DURATION;
      
      if (startMinute === 60) {
        startHour += 1;
        startMinute = 0;
      }
    }
  }
  
  // Generate slots
  for (let hour = startHour; hour < CLOSING_HOUR; hour++) {
    for (let minute = (hour === startHour ? startMinute : 0); minute < 60; minute += SLOT_DURATION) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push({
        time: timeString,
        available: Math.random() > 0.3 // Randomly mark some slots as unavailable
      });
    }
  }
  
  return slots;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get('date');
  
  if (!date) {
    return NextResponse.json(
      { error: 'Date parameter is required' },
      { status: 400 }
    );
  }
  
  try {
    const slots = generateTimeSlots(date);
    return NextResponse.json({ slots });
  } catch {
    return NextResponse.json(
      { error: 'Invalid date format' },
      { status: 400 }
    );
  }
} 