(() => {

    type Gender = 'M'|'F';

    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date){
        }
    }

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public emaill: string,
            public role: string,
            name: string,
            gender: Gender,
            birthDate: Date,
        ){
            super(name, gender, birthDate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenfolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthDate: Date,
        ){
            super(email, role, name, gender, birthDate)
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'javier-larroca@hotmail.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1997-07-16')
    );

    console.log({userSettings})
})();