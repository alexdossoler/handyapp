import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import * as z from 'zod';

const prisma = new PrismaClient();

const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your address"),
  serviceType: z.string().min(1, "Please select a service type"),
  description: z.string().min(10, "Please describe your project (minimum 10 characters)"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  urgency: z.enum(["Low", "Medium", "High", "Emergency"])
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = quoteSchema.parse(body);
    
    // Save to database
    const appointment = await prisma.appointment.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        address: validatedData.address,
        serviceType: validatedData.serviceType,
        description: validatedData.description,
        preferredTime: validatedData.preferredTime,
        urgency: validatedData.urgency,
      },
    });

    return NextResponse.json(
      { message: 'Quote request submitted successfully', id: appointment.id },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}