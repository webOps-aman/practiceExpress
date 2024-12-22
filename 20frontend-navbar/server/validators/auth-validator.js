const {z} = require("zod");

const signupSchema = z.object({
    username: z
    .string({required_error: "Name Is Required"})
    .trim()
    .min(3, {message: "Name must be at least of 3 chars."})
    .max(255, {message: "Name must not be more than 255 chars."}),

    email: z
    .string({required_error: "Email Is Required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(3, {message: "Email must be at least of 3 chars."})
    .max(255, {message: "Email must not be more than 255 chars."}),

    phone: z
    .string({required_error: "Phone Is Required"})
    .trim()
    .min(10, {message: "Phone must be at least of 10 chars."})
    .max(20, {message: "Phone must not be more than 20 chars."}),

    password: z
    .string({required_error: "Password Is Required"})
    .min(7, {message: "Password must be at least of 7 chars."})
    .max(1024, {message: "Password must not be more than 1024 chars."})
});

module.exports = signupSchema;