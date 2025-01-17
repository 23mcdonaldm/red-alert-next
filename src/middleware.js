//without defined matcher, this applies next-auth to entire project
export { default } from "next-auth/middleware" 

//applies only to matching routes
export const config = { matcher: ["/extra", "/dashboard"] }