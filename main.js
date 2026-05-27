  let username = localStorage.getItem("username");

        document.getElementById("WelcomeText").innerText =
            "Welcome! " + username;


            function SettingsMenu() {
               document.getElementById('SettingsMenu').classList.toggle('open');
               
            }

            function FrogB() {
            document.getElementById('FrogButton').classList.toggle('open');
            }


            window.addEventListener('load', () => {
                const loader = document.getElementById('page-loader');
                setTimeout(() => {
                    loader.classList.add('fade-out');
                    setTimeout(() => loader.remove(), 300);
                }, 1000)
            });

            document.querySelectorAll('a, button[onclick]:not(.no-loader)').forEach(el => {
                el.addEventListener('click', () => {
                    const loader = document.createElement('div');
                    loader.id = 'page-loader';
                    loader.innerHTML = `
                    <div class="loader-box">Vroom...</div>
                    <div class="loader-dots"><span></span><span></span><span></span></div>
                    `;
                    document.body.appendChild(loader);
                });
            });


