import jwt from "jsonwebtoken";
export const generateToken = (userId, res) => {
  // generate JWT token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    httpOnly: true, // prevent javascript access to the cookie
    secure: process.env.NODE_ENV !== "development", // only send cookie over HTTPS in production
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token;
};
