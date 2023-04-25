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
    post: [
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
    employee: [
        {
            type: "text",
            name: "firstName",
            placeholder: "Ime",
            value: "",
            validations: [
                {
                    type: "maxLength",
                    value: 20,
                    message: "Max. 20 karaktera",
                },
                {
                    type: "required",
                    message: "Ime je obavezno"
                },
            ],
        },
        {
            type: "text",
            name: "lastName",
            placeholder: "Prezime",
            value: "",
            validations: [
                {
                    type: "maxLength",
                    value: 20,
                    message: "Max. 20 karaktera",
                },
                {
                    type: "required",
                    message: "Prezime je obavezno"
                },
            ],
        },
        {
            type: "select",
            name: "role",
            label: "Radno mesto: ",
            value: "",
            options: [
                {
                    value: "professor",
                    desc: "profesor"
                },
                {
                    value: "cleaner",
                    desc: "spremač"
                },
                {
                    value: "lawyer",
                    desc: "pravnik"
                },
                {
                    value: "pedagogue",
                    desc: "pedagog"
                },
                {
                    value: "psychologist",
                    desc: "psiholog"
                },
                {
                    value: "director",
                    desc: "direktor",
                },
                {
                    value: "deputy",
                    desc: "zamenik"
                },
                {
                    value: "librarian",
                    desc: "bibliotekar"
                },
                {
                    value: "janitor",
                    desc: "domar"
                }
            ],
            validations: [
                {
                    type: "required",
                    message: "Radno mesto je obavezno"
                }
            ]
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
    
}