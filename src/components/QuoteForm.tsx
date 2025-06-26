"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail } from "lucide-react";

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

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema)
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit quote request');
      }

      const result = await response.json();
      console.log("Quote request submitted:", result);
      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("There was an error submitting your quote request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white" aria-live="polite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center" role="alert" aria-labelledby="success-heading">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4" role="img" aria-label="Success checkmark">
              <Phone className="w-8 h-8 text-green-600" aria-hidden="true" />
            </div>
            <h3 id="success-heading" className="text-2xl font-bold text-green-800 mb-4">Quote Request Received!</h3>
            <p className="text-green-700 mb-6">
              Thank you for your interest! We&apos;ll review your request and contact you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Next steps">
              <a
                href="tel:+18647433178"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Call AppyHandy now at (864) 743-3178"
              >
                Call Now: (864) 743-3178
              </a>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-white text-green-600 px-6 py-3 rounded-lg border border-green-600 hover:bg-green-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Submit another quote request"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" aria-labelledby="quote-form-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 id="quote-form-heading" className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote</h2>
          <p className="text-xl text-gray-600">
            Tell us about your project and we&apos;ll provide a detailed estimate
          </p>
        </header>

        <div className="bg-white rounded-2xl shadow-xl border p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate aria-label="Quote request form">
            {/* Personal Information */}
            <fieldset className="grid md:grid-cols-2 gap-6">
              <legend className="sr-only">Personal Information</legend>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  {...register("name")}
                  id="name"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your full name"
                  aria-required="true"
                  aria-invalid={errors.name ? 'true' : 'false'}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  {...register("phone")}
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="(864) 123-4567"
                  aria-required="true"
                  aria-invalid={errors.phone ? 'true' : 'false'}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">{errors.phone.message}</p>
                )}
              </div>
            </fieldset>

            <fieldset className="grid md:grid-cols-2 gap-6">
              <legend className="sr-only">Contact Information</legend>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  {...register("email")}
                  id="email"
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
                  aria-required="true"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Address *
                </label>
                <input
                  {...register("address")}
                  id="address"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="123 Main St, City, State"
                  aria-required="true"
                  aria-invalid={errors.address ? 'true' : 'false'}
                  aria-describedby={errors.address ? 'address-error' : undefined}
                />
                {errors.address && (
                  <p id="address-error" className="mt-1 text-sm text-red-600" role="alert">{errors.address.message}</p>
                )}
              </div>
            </fieldset>

            {/* Service Details */}
            <fieldset className="grid md:grid-cols-2 gap-6">
              <legend className="sr-only">Service Details</legend>
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  {...register("serviceType")}
                  id="serviceType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-required="true"
                  aria-invalid={errors.serviceType ? 'true' : 'false'}
                  aria-describedby={errors.serviceType ? 'serviceType-error' : undefined}
                >
                  <option value="">Select a service</option>
                  <option value="Plumbing">Plumbing Services</option>
                  <option value="Electrical">Electrical Work</option>
                  <option value="Carpentry">Carpentry & Repairs</option>
                  <option value="Maintenance">Home Maintenance</option>
                  <option value="Appliances">Appliance Services</option>
                  <option value="Painting">Painting & Finishing</option>
                  <option value="Other">Other</option>
                </select>
                {errors.serviceType && (
                  <p id="serviceType-error" className="mt-1 text-sm text-red-600" role="alert">{errors.serviceType.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                  Urgency Level *
                </label>
                <select
                  {...register("urgency")}
                  id="urgency"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  aria-required="true"
                  aria-invalid={errors.urgency ? 'true' : 'false'}
                  aria-describedby={errors.urgency ? 'urgency-error' : undefined}
                >
                  <option value="">Select urgency</option>
                  <option value="Low">Low - Within 2 weeks</option>
                  <option value="Medium">Medium - Within 1 week</option>
                  <option value="High">High - Within 2-3 days</option>
                  <option value="Emergency">Emergency - ASAP</option>
                </select>
                {errors.urgency && (
                  <p id="urgency-error" className="mt-1 text-sm text-red-600" role="alert">{errors.urgency.message}</p>
                )}
              </div>
            </fieldset>

            <div>
              <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Time *
              </label>
              <select
                {...register("preferredTime")}
                id="preferredTime"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                aria-required="true"
                aria-invalid={errors.preferredTime ? 'true' : 'false'}
                aria-describedby={errors.preferredTime ? 'preferredTime-error' : undefined}
              >
                <option value="">Select preferred time</option>
                <option value="Morning">Morning (8am - 12pm)</option>
                <option value="Afternoon">Afternoon (12pm - 5pm)</option>
                <option value="Evening">Evening (5pm - 8pm)</option>
                <option value="Anytime">Anytime</option>
              </select>
              {errors.preferredTime && (
                <p id="preferredTime-error" className="mt-1 text-sm text-red-600" role="alert">{errors.preferredTime.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Project Description *
              </label>
              <textarea
                {...register("description")}
                id="description"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please describe your project in detail. Include any specific requirements, materials, or timeline preferences."
                aria-required="true"
                aria-invalid={errors.description ? 'true' : 'false'}
                aria-describedby={errors.description ? 'description-error' : undefined}
              />
              {errors.description && (
                <p id="description-error" className="mt-1 text-sm text-red-600" role="alert">{errors.description.message}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6" role="group" aria-label="Form submission options">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={isSubmitting ? 'Submitting quote request...' : 'Submit quote request'}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" aria-hidden="true" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" aria-hidden="true" />
                    <span>Submit Quote Request</span>
                  </>
                )}
              </button>
              
              <a
                href="tel:+18647433178"
                className="flex-1 sm:flex-none bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Call AppyHandy now at (864) 743-3178"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call Now</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}