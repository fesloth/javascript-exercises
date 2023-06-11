const classes = "X PPLG B";
const gender = "Female";
const school = "SMKN 2 BANJARMASIN";
const languanges = "PHP, JAVASCRIPT, RUBY";
const trycat = `Class : ${classes} <br> Gender : ${gender} <br> School : ${school} <br> Favs Languages of Programming : ${languanges} <br> <br>`;

document.writeln(trycat);

// matematika

const firstname = "Syahla";
const middlename = "Nur";
const lastname = "Azizah";
const value = 100;

const graduate = `Name : ${firstname} ${middlename} ${lastname} <br>
Lulus: ${value > 80} <br> <br>`;

document.writeln(graduate);

// multiline string template

const multiline = `Nama saya Syahla Nur Azizah,
sekarang adalah pelajar di SMKN 2 Banjarmasin.
Saya sebentar lagi akan naik ke kelas 11 pplg b,
mata pelajaran umum kesukaan saya adalah matematika dan bahasa inggris,
untuk kejuruan saya akan mulai fokus sebagai backend developer.`;

document.writeln("<pre>");
document.writeln(multiline);
document.writeln("</pre>");
