import { applicationSchema } from '../validators/applicationSchema.js';
export function validateApplication(req, res, next) {
 const parsed = applicationSchema.safeParse(req.body ?? {});
 if (!parsed.success) return res.status(400).json({ success:false, message:'Please correct the highlighted fields.', errors: parsed.error.flatten().fieldErrors });
 req.validatedBody = parsed.data;
 next();
}
