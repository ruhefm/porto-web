---
title: LMS Project
desc: This project is using express nodejs for communicating with Supabase and Also using Laravel for server-side pages, Well I don't know why it could be like that because someone asked me to continue this project to fullfill their assignment for thesis.
images: ['/LMS.png']
size:
tools: [
    {imagePath: '/nodejs.svg', alt: 'NodeJS'},
    {imagePath: '/laravel.svg', alt: 'Laravel'},
]
tags: ['personal', 'apps']
---

> # **The LMS Project**
A hybrid LMS built with both Express (Node.js) and Laravel to support Supabase integration.
Originally a request to help a friend finish their thesis project — and yes, the tech stack choice is a bit unconventional.

## Why Both Laravel and Express?
This project is quite unique because it combines Laravel (for traditional server-rendered pages) with Express (Node.js) for handling Supabase API communication. While it's not a standard approach, I inherited the architecture from someone else's thesis and decided to follow through to keep it consistent.

The Express server acts as a middleware or backend API to connect with Supabase, especially for handling authentication, file uploads, and CRUD operations. Meanwhile, Laravel is used for the frontend templating and routing.

## Tools
- Express.js – Handles API communication with Supabase

- Supabase – Backend-as-a-Service used for database and file storage

- Laravel – Serves views and manages server-side pages

## Documentation
![LMS-Project](/LMS.png)

## Main API

```
const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const response = require("./response");
require("dotenv").config;
const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "supaURL";
const supabaseAnonKey =
  "supaKey";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const multer = require("multer");
const upload = multer();
const bucketName = 'file_materi';
const filePath = 'path/in/bucket/notul_hasna.txt';
const fileContents = require('fs').readFileSync(filePath);

app.use(bodyParser.json());

supabase.storage
    .from(bucketName)
    .upload('path/in/bucket/notul_hasna.txt', fileContents, {
        contentType: 'text/plain', // Sesuaikan dengan tipe file
    })
    .then((response) => {
        if (response.status === 201) {
            console.log('File diunggah:', response.data.Key);
        } else {
            console.error('Upload gagal:', response.error);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });

app.get("/hello", (req, res) => {
  res.send("Hello World!");
  console.log(supabase);
});

app.get("/get", async (req, res) => {
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    return response(500, null, error.message, res);
  }
  console.log(data);
  return response(200, data, "Get all user success", res);
});

app.get("/getIDUser/:id", async (req, res) => {
  const userId = req.params.id;
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", userId);
  if (error) {
    return response(500, null, error.message, res);
  }
  return response(200, data, "Get all user success", res);
  console.log(data);
});

app.post("/register", async (req, res) => {
  const { name, email, password, phone, role, kelas } = req.body;
  try {
    const { data: checkEmail, error: checkEmailError } = await supabase
      .from("users")
      .select("*")
      .eq("email", email);

    if (checkEmailError) {
      console.error("Supabase Check Email Error:", checkEmailError);
      return response(500, null, "Internal Server Error", res);
    }

    if (checkEmail && checkEmail.length > 0) {
      const userData = {
        isSuccess: "error",
        message: "Email sudah terdaftar",
      };
      return response(200, userData, "Email sudah terdaftar", res);
    } else {
      try {
        const { data: newUser, error: newUserError } = await supabase
          .from("users")
          .insert({ name, email, password, phone, role, kelas })
          .select("*")
          .eq("email", email);

        if (newUserError) {
          return response(500, null, "Internal Server Error", res)
        }
        const responseUser = {
          isSuccess: "success",
          id: newUser[0].id,
          messege: "Data berhasil ditambahkan",
        };
        return response(200, responseUser, "Data berhasil ditambahkan", res);
      } catch (error) {
        return response(500, null, "Internal Server Error", res);
      }
    }
  } catch (error) {
    console.error("Supabase Check Email Error:", error);
    return response(500, null, "Internal Server Error", res);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .eq("password", password);

    if (error) {
      return response(500, null, "Internal Server Error", res);
    }

    if (data.length === 1) {
      const user = data[0];
      const userData = {
        isSuccess: "success",
        id: user.id,
      };
      return response(200, userData, "Berhasil login", res);
    } else {
      return response(404, null, "Pengguna tidak ditemukan", res);
    }
  } catch (error) {
    console.error(error);
    return response(500, null, "Internal Server Error", res);
  }
});

app.post("/tugas", async (req, res) => {
  const { user_id, nama_siswa, kelas, tanggalmasuk, task_id } = req.body;
  try {
    const { data: newTugas, error } = await supabase
      .from("tugas")
      .insert([{ user_id, nama_siswa, kelas, tanggalmasuk, task_id }])
      .select("*");

    if (error) {
      console.error(error);
      return response(500, null, "Internal Server Error", res);
    }

    const responseUser = {
      isSuccess: "success",
      id: newTugas[0].id,
      message: "Tugas berhasil ditambahkan",
    };

    console.log(newTugas[0]);

    return response(200, responseUser, "Tugas berhasil ditambahkan", res);
  } catch (error) {
    console.error(error);
    return response(500, null, "Internal Server Error", res);
  }
});

app.delete("/tugas/:id", async (req, res) => {
  const tugasId = req.params.id;

  try {
    const { data, error } = await supabase
      .from("tugas")
      .delete()
      .eq("id", tugasId);
    if (error) {
      console.log("Supabase Delete Error:", error);
      return response(500, null, "Internal Server Error", res);
    }
    const responseData = {
      isSuccess: "success",
      message: "tugas berhasil dihapus",
    };
    return response(200, responseData, "tugas berhasil dihapus", res);
  } catch (error) {
    console.log("Supabase Delete Error:", error);
    return response(500, null, "Internal Server Error", res);
  }
});

app.put("/tugas/:id", upload.single("file"), async (req, res) => {
  const tugasId = req.params.id;
  const { nama_siswa, namatugas, kelas, desk_tugas, tanggalmasuk, user_id } = req.body;
  const file = req.file;

  try {
    const { data: fileData, error: fileError } = await supabase.storage
      .from("your-storage-bucket")
      .upload(`materi/${file.originalname}`, file.buffer, {
        cacheControl: "3600",
        upsert: true,
      });

    if (fileError) {
      console.error("Error uploading file:", fileError);
      return response(500, null, "Internal Server Error", res);
    }

    const { data: updatedadd_task, error: updateError } = await supabase
      .from("tugas")
      .update({
        nama_siswa,
        namatugas,
        kelas,
        desk_tugas,
        tanggalmasuk,
        user_id,
        file: fileData.key,
      })
      .eq("id", tugasId)
      .select("*");
    dd($data);
    if (updateError) {
      return response(500, null, "Internal Server Error", res);
    }

    if (updatedadd_task.length === 1) {
      const tugasData = {
        isSuccess: "success",
        message: "Tugas berhasil diupdate",
      };
      return response(200, tugasData, "Tugas berhasil diupdate", res);
    } else {
      return response(404, null, "Tugas not found", res);
    }
  } catch (error) {
    console.log("Supabase Update tugas Error:", error);
    return response(500, null, "Internal Server Error", res);
  }
});

app.get("/all_task", async (req, res) => {
  const { data, error } = await supabase.from("tugas_guru").select("*");
  if (error) {
    return response(500, null, error.message, res);
  }
  console.log(data);
  return response(200, data, "Get all task success", res);
});

app.get("/semua_tugas", async (req, res) => {
  const { data, error } = await supabase.from("tugas").select("*");
  if (error) {
    return response(500, null, error.message, res);
  }
  console.log(data);
  return response(200, data, "Get all task success", res);
});

app.get("/all_materi", async (req, res) => {
  const { data, error } = await supabase.from("materi").select("*");
  if (error) {
    return response(500, null, error.message, res);
  }
  console.log(data);
  return response(200, data, "Get all user success", res);
});

app.post("/materi", async (req, res) => {
  const { judul, deskripsi } = req.body;
  try {
    const { data: newMateri, error } = await supabase
      .from("materi")
      .insert([{ judul, deskripsi }])
      .select("*");

    if (error) {
      console.error(error);
      return response(500, null, "Internal Server Error", res);
    }

    const responseUser = {
      isSuccess: "success",
      id: newMateri[0].id,
      message: "Materi berhasil ditambahkan",
    };

    return response(200, responseUser, "Materi berhasil ditambahkan", res);
  } catch (error) {
    console.error(error);
    return response(500, null, "Internal Server Error", res);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```