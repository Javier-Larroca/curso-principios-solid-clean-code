(() => {

    //Aplicando el principio de responsabiidad unica
    //Priorizar la composicion frente a la herencia

    type Gender = 'M' | 'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender;
        name: string;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    }

    interface UserProps {
        email: string;
        role: string;
    }

    class User {
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({
            email,
            role,
        }: UserProps) {
            this.email = email;
            this.lastAccess = new Date();
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        workingDirectory: string;
        lastOpenfolder: string;
    }

    class Settings {
        public lastOpenfolder: string;
        public workingDirectory: string;

        constructor({
            lastOpenfolder,
            workingDirectory,
        }: SettingsProps) {
            this.lastOpenfolder = lastOpenfolder;
            this.workingDirectory = workingDirectory;
        }
    }

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenfolder: string;
        name: string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person: Person;
        public settings: Settings;
        public user: User;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenfolder, workingDirectory
        }: UserSettingsProps) {
            this.person = new Person({ name, gender, birthdate });
            this.user = new User ({email, role});
            this.settings = new Settings({lastOpenfolder, workingDirectory});
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date('1997-07-16'),
        email: 'javier-larroca@hotemail.com',
        gender: 'M',
        lastOpenfolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings })
})();