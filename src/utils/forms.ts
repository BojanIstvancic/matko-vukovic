export interface InputProps {
  name: string;
  value: string | number | boolean;
  placeholder?: string;
  label?: string;

  type: "text" | "email" | "password" | "select"; // which compoonent to render
  typeValue?: "string" | "boolean"; // what type of data to assign to instance of Yup
  options?: Opt[]; // select options
  validations: Validation[]; // validation rules
}

export interface Opt {
  value: string | number; // for select (could be for radio too)
  desc: string;
}

export interface Validation {
  // validation rules for yup
  type: "required" | "isEmail" | "minLength" | "isTrue";
  value?: string | number | boolean;
  message: string;
}


export const forms: { [x: string]: InputProps[] } =
{
    login: [
        {
            type: "text",
            name: "name",
            placeholder: "Korisničko ime",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 5,
                    message: "Min. 5 karaktera",
                },
                {
                    type: "required",
                    message: "Korisničko ime je obavezno"
                },
            ],

        },
        {
            type: "password",
            name: "password",
            placeholder: "Šifra",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 5,
                    message: "Min. 8 karaktera",
                },
                {
                    type: "required",
                    message: "Šifra je obavezna"
                }
            ],

        }
    ],
}