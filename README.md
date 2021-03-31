# Dockerizing an Node App (ExpressJS)
## Setup
1. Install docker
2. Check docker, pake ini : `docker -v`
3. Git clone repository ini
4. Masuk ke directory nya
5. Docker build untuk membuat image app express ini dari Dockerfile
   <br>
   ```
   docker build -t harlitad/express-example-app .
   ``` 
   Jadi patternnya kayak gini :
   ```
   docker build -t username-docker-hub/image-name path-dockerfile
   ```
   Kenapa pake titik `.` ?
   <br>
   Karena dia reference ke path directory saat ini, jadi akan mencari dockerfile di directory letak kita menjalankan docker build. 
   <br>
   Tungguin aja sampe beres, karena akan download dependencies juga, cukup banyak, yang sabar.
7. Docker container, jalanin :
   ```
   docker run -it --name express-example-app -p 4300:3210 -d harlitad/express-example-app
   ```
   **Penjelasan** :
   - `docker run` : 
        >>> Mengutip Docker Documentation :
        *The docker run command first creates a writeable container layer over the specified image, and then starts it using the specified command*
   - `-it` : 
        >>> Mengutip dari stackoverflow :
        *-it is short for --interactive + --tty when you docker run with this command.. it would take you straight inside of the container,, where -d is short for --detach which means you just run the container and then detach from it so basically you run container in the background.. edit : so if you run docker container with-itd it would run the-it options and detach you from the container, so your container still running in the background even without any default app to run..*
    - `--name express-example-app` : memberikan nama container dengan express example-app
    - `-p 4300:3210` : -p stands for publish, jadi tentukan port yang bisa diakses oleh all over the world / dari luar container. Sebelah kanan publish port, sedangkan yang kiri adalah expose port (port yang bisa di expose oleh image-nya sendiri). 
    Mendapatkan expose port dari sebuah image :
    ```
    docker image inspect f877e80bb9ef | grep -A 2 ExposedPorts
    ``` 
    - `-d` : -d stands for detach, kalau kata docker gini `Run container in background and print container ID`. Jadi dia ga akan nampilin logs container nya ketika menjalankan, kalau mau ngeliat log cukup jalanin `docker logs name_container`
    - `harlitad/express-example-app` : nama image yang akan dibuat container nya.

8. Selesai ?
   <br>
   Tinggal jalankan di browser `localhost:4300` , maka kita akan disambut oleh sebuah kata legend `welcome !`.