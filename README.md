<div align="center">

# Portfoliocms-Backend

<p> This is a portfolio CMS backened for dynamic portfolio project update </p>
</div>

![alt text](utils/assets/cms.png)

## Getting started

1. clone the respository
   ```shell
   $ git clone https://github.com/Binary-Brigades/portfolio-cms.git
   $ cd portfolio-cms
   $ touch .env
   ```
2. Add the following variables to the .env file
   ```
   PORT = [port your that your will run on]
   mongoDbUrl = [mongodburl]
   mongoDbName = [name of the database]
   AccessTokenSecretKey = [random string ]
   AccessTokenExpires = 0
   CLOUDINARY_CLOUD_NAME=
   CLOUDINARY_API_KEY=
   CLOUDINARY_API_SECRET=
   CLOUDINARY_URL=
   ```

## Registration

> **request**

- url: https://portfolio-cms-nine.vercel.app/api/v1/auth/register
- method: POST
- example of a request body:
  ```json
  {
    "username": "Antony",
    "email": "antonygichoya1@gmail.com",
    "password": "password",
    "confirm_password": "password"
  }
  ```
  > **response**

* status code: `201` if success else `400`
* response body:

```json
   "status": "success",
   "message": "user registerd successfully",
```

## Login

> **request**

- url: https://portfolio-cms-nine.vercel.app/api/v1/auth/login
- method: POST
- request body:
  ```json
  "email": "string"
  "password": "string"
  ```
  > **response**
- status code: `200` if success else `401`
- response body:

```json
   "status": "success",
   "access_token": "<user access token >",
```

## Get Profile

> **request**

- url: https://portfolio-cms-nine.vercel.app/api/v1/user/profile
- method: GET

> **response**

- status code: `200`
- example of a response body:

```json
   "username": "maich",
   "email": "mainamaich@gmail.com",
```

## Edit Profile

> **request**

- url: https://portfolio-cms-nine.vercel.app/api/v1/user/edit-profile
- method: POST

* request body:
  ```
  username: string optional
  email: string optional
  password: string optional
  confirm_password: ref(password)
  ```

> **response**

- status code: `200`
- response body:

```json
   "first_name": "maich",
   "last_name": "magode",
   "email": "mainamaich@gmail.com",
```

## projects

### get all user projects

> **request**

- url: https://portfolio-cms-nine.vercel.app/api/v1/project/getall
- method: GET

* request headers(token):
  ```
  authorization:`Bearer token`
  ```

> **response**

- status code: `200`
- response body:

```json
[
  {
    "title": "",
    "description": "",
    "createdBy": "",
    "duration": "",
    "githublink": "",
    "livelink": "",
    "time": "",
    "tabs": [],
    "imageUrls": []
  }
]
```

### get project byid

> **request**

- url: https://portfolio-cms-nine.vercel.app/api/v1/project/:id
- method: GET

> **response**

- status code: `200`
- response body:

```json
{
  "title": "",
  "description": "",
  "createdBy": "",
  "duration": "",
  "githublink": "",
  "livelink": "",
  "time": "",
  "tabs": [],
  "imageUrls": []
}
```

### create a projects

> **request**

- url: https://portfolio-cms-nine.vercel.app/api/v1/project
- method: POST

* request headers(token):
  ```bash
  authorization:`Bearer token`
  ```
* request body:

```json
{
  "title": "",
  "description": "",
  "createdBy": "",
  "duration": "",
  "githublink": "",
  "livelink": "",
  "time": "",
  "tabs": [],
  "imageUrls": []
}
```

> **response**

- status code: `201`
- message :"project created successfully"
- response body:

```json
{
  "title": "",
  "description": "",
  "createdBy": "",
  "duration": "",
  "githublink": "",
  "livelink": "",
  "time": "",
  "tabs": [],
  "imageUrls": []
}
```

### update a projects

> **request**

- url: https://portfolio-cms-nine.vercel.app/api/v1/project/:id
- method: PUT

* request headers(token):
  ```
  authorization:`Bearer token`
  ```
* request body:

```json
{
  "title": "",
  "description": "",
  "createdBy": "",
  "duration": "",
  "githublink": "",
  "livelink": "",
  "time": "",
  "tabs": [],
  "imageUrls": []
}
```

> **response**

- status code: `200`
- message :"Project updated successfully"
- response body:

```json
{
  "title": "",
  "description": "",
  "createdBy": "",
  "duration": "",
  "githublink": "",
  "livelink": "",
  "time": "",
  "tabs": [],
  "imageUrls": []
}
```

### delete a projects

> **request**

- url: https://portfolio-cms-nine.vercel.app/api/v1/project/:id
- method: DELETE

* request headers(token):
  ```
  authorization:`Bearer token`
  ```

> **response**

- status code: `200`
- message :"Project deleted successfully"
- response body:
