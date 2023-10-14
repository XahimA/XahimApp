import Axios from "axios";

import { BASE_URL } from "../../global/server";

export const getLanguages = () => Axios.get(`${BASE_URL}/language/getall`);