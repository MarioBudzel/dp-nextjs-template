# Setup

## 1. Environment

- Node.js  
- Next.js  
- React  
- Docker (+ Docker compose - Linux)

## 2. Clone  
Clone the project using GIT or download it from github.com and extract the files to your designated location.

```bash
git clone https://github.com/MarioBudzel/dp-nextjs-template.git
```

## 3. Install the dependencies

After cloning the project you need to install the required dependencies for API and for WEB.

### Directory - web

```bash
cd <project_folder_name>
cd web

npm install
```

### Directory - api

```bash
# Starting from 
# <project_folder_name>/web
cd ..
cd api

npm install
```

## 4. Next.js initialization

For this step you need to navigate back to `./web` directory and run the Next.js app.

```bash
# inside <project_folder_name>/web

npm run dev
```

This will create `.next` directory inside the folder. Your app will now be running. You need to shut it down by pressing CTRL+C inside the terminal and by following the instructions.

## 5. Prisma initialization

Still inside the `./web` directory, run the following command.

```bash
# inside <project_folder_name>/web

npx prisma generate
```

You should see Prisma output inside the terminal.

## 6. .env

Still inside the `./web` directory. Prisma will have trouble using environment variables defined inside `docker-compose.yml`, therefore you should create your own `.env` file inside `./web` directory. Copy and paste the following keys.

```env
# inside <project_folder_name>/web/.env

MONGODB_URI=mongodb://mongo:27017/nextjs?replicaSet=rs0
AUTH_SECRET=<available inside docker-compose.yml>
GEMINI_API_KEY=<use Google Cloud to generate your own>
NEXT_PUBLIC_BASE_URL=http://localhost:5001
NEXT_PUBLIC_NGINX_BASE_URL="http://localhost:5001"
```

## 7. Docker

Now navigate to the root of the project (where `docker-compose.yml` is located) and run the following command.

```bash
# inside <project_folder_name>

docker-compose up --wait
```

Use `--wait` to wait for healthcheck of all the containers. To subsequently run your project use only:

```bash
# inside <project_folder_name>

docker-compose up
```

## 8. All set up

Now you should be all set to try out your application. Navigate to: [http://localhost:5001](http://localhost:5001).
