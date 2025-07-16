import Joi from "joi";
function LoginVal(req, res, next) {
  if (!req.body) {
    return res.status(400).json({ message: "Please Complete the filds" });
  }

  if (!req.body.Email) {
    return res.status(400).json({ message: "Email Required" });
  }

  if (!req.body.Password) {
    return res.status(400).json({ message: "Password Required" });
  }

  const registerSchema = Joi.object({
    Email: Joi.string().email().min(5).max(64).required(),
    Password: Joi.string().min(6).required(64),
  });

  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
}

export default LoginVal;
