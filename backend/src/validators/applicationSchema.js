import { z } from 'zod';
export const applicationSchema = z.object({
 fullName: z.string().trim().min(2, 'Enter at least 2 characters').max(80),
 email: z.string().trim().email('Enter a valid email').max(120),
 phone: z.string().trim().regex(/^[+]?[-0-9 ()]{8,20}$/, 'Enter a valid phone number'),
 internshipId: z.string().trim().min(1).max(60),
 coverLetter: z.string().trim().min(20, 'Please write at least 20 characters').max(1500)
}).strict();
