# jest-sql-injection-analyzer

Jest and Supertest tool for found SQL, NoSQL &amp; code injection vulnerabilities in your NodeJS APIs

<p align=center>⚠️ Not ready for Production ⚠️</p>

<p align=center>⚠️ missing changes to make the tool agnostic for use with any testing library ⚠️</p>

<br>

```
npm i --save-dev supertest-sql-injection
```

## The purpose of this Tool

In development environments, Supertest with React is a very easy way to make integration testing. Therefore _jest-sql-injection-analyzer_ could be useful for detect early vulnerabilities in your code, or when you install new dependencies.

This tool not replace a complete DevSecOps implementation, but could be useful in TDD process for NodeJS backend developers. And part of the usual tests in pipelines
