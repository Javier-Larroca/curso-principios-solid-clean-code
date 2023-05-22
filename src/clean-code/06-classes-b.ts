(() => {

    type Gender = 'M'|'F';

    interface PersonProps {
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthDate: Date;

        constructor({name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthdate;
        }
    }

    interface UserProps{
        mail: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class User extends Person {
        public mail: string;
        public role: string;
        public lastAccess: Date;

        constructor( 
            {birthdate,
            mail,    
            role,
            name,
            gender
        }: UserProps){
            super({name, gender, birthdate});
            this.lastAccess = new Date();
            this.mail = mail;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        workingDirectory: string;
        lastOpenfolder: string;
        mail: string;
        role: string;
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenfolder: string;

        constructor({  
            workingDirectory, 
            lastOpenfolder, 
            mail, 
            role, 
            name, 
            gender,
            birthdate,
        }: UserSettingsProps){
            super({mail, role, name, gender, birthdate})
            this.workingDirectory = workingDirectory;
            this.lastOpenfolder = lastOpenfolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenfolder: '/home',
        mail: 'javier-larroca@hotmail.com',
        role: 'Admin',
        name: 'Fernando',
        gender: 'M',
        birthdate: new Date('1997-07-16')
    });

    console.log({userSettings})
})();