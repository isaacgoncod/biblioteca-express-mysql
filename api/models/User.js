class User {
  constructor(i) {
    this.id = i.id;
    this.nome = i.nome;
    this.matricula = i.matricula;
    this.senha = i.senha;
    this.salario = i.salario;
  }

  add() {
    return `INSERT INTO user VALUE (DEFAULT, '${this.nome}', '${this.matricula}', '${this.senha}', ${this.salario})`;
  }
  read() {
    return `SELECT * FROM user`;
  }

  auth() {
    return `SELECT * FROM user WHERE matricula = '${this.matricula}' AND senha = '${this.senha}'`;
  }
}
module.exports = User;
