import { JwtPayload } from "jwt-decode"

export interface JwtDecoded {
  email: string,​
  exp: Date,​
  family_name: string,
​  given_name: string,
​  iat: Date,
​  iss: string
​  nameid: string,
​  nbf: Date
​  role: string

}
