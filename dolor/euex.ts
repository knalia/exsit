type Person = {
  name: string;
  age: number;
};

class School {
  private name: string;
  private address: string;
  private students: Person[];
  private teachers: Person[];

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
    this.students = [];
    this.teachers = [];
  }

  public addStudent(student: Person): void {
    this.students.push(student);
  }

  public addTeacher(teacher: Person): void {
    this.teachers.push(teacher);
  }

  public getStudentCount(): number {
    return this.students.length;
  }

  public getTeacherCount(): number {
    return this.teachers.length;
  }

  public getSchoolInfo(): string {
    return `School Name: ${this.name}, Address: ${this.address}`;
  }
}

// Usage
const mySchool = new School('Greenwood High', '101 Main St');
mySchool.addStudent({ name: 'John Doe', age: 10 });
mySchool.addTeacher({ name: 'Jane Smith', age: 30 });

console.log(mySchool.getSchoolInfo());
console.log(`Student Count: ${mySchool.getStudentCount()}`);
console.log(`Teacher Count: ${mySchool.getTeacherCount()}`);
