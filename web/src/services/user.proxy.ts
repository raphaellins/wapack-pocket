import axios from "axios";

export default class UserProxy {
  public async login(email: any, password: any): Promise<any> {
    const url: string = `${process.env.REACT_APP_API}/signin`;

    const response = await axios.post(url, {
      email,
      password,
    });

    if (response.status !== 200) {
      return null;
    }

    return response.data.token;
  }
}
