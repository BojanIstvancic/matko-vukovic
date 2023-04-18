export interface InputProps {
  name: string;
  value: string | number;
  placeholder?: string;
  label?: string;

  type: "text" | "password" | "select" | "textarea"| "file"; // which compoonent to render
  typeValue?: "string" ; // what type of data to assign to instance of Yup
  options?: Opt[]; // select options
  validations: Validation[]; // validation rules
}

export interface Opt {
  value: string | number; // for select (could be for radio too)
  desc: string;
}

export interface Validation {
  // validation rules for yup
  type: "required" | "minLength" | "maxLength";
  value?: string | number;
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
                    value: 8,
                    message: "Min. 8 karaktera",
                },
                {
                    type: "required",
                    message: "Šifra je obavezna"
                }
            ],

        }
    ],
    editPost: [
        {
            type: "text",
            name: "title",
            placeholder: "Naslov",
            value: "",
            validations: [
                {
                    type: "maxLength",
                    value: 50,
                    message: "Max. 50 karaktera",
                },
                {
                    type: "required",
                    message: "Naslov je obavezan"
                },
            ],
        },
        {
            type: "textarea",
            name: "content",
            placeholder: "Sadržaj",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 300,
                    message: "Min. 300 karaktera",
                },
                {
                    type: "required",
                    message: "Sadržaj je obavezan"
                },
            ],
        },
        {
            type: "file",
            name: "image",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Slika je obavezna"
                },
            ],
        },
    ],
    addPost: [
        {
            type: "text",
            name: "title",
            placeholder: "Naslov",
            value: "",
            validations: [
                {
                    type: "maxLength",
                    value: 50,
                    message: "Max. 50 karaktera",
                },
                {
                    type: "required",
                    message: "Naslov je obavezan"
                },
            ],
        },
        {
            type: "textarea",
            name: "content",
            placeholder: "Sadržaj",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 300,
                    message: "Min. 300 karaktera",
                },
                {
                    type: "required",
                    message: "Sadržaj je obavezan"
                },
            ],
        },
        {
            type: "file",
            name: "image",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Slika je obavezna"
                },
            ],
        },
    ]
}