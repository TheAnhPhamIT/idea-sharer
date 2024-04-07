export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/user-rooms", "/create-room", "/room/:roomId/edit", "/browse"],
};
