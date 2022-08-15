        document.querySelector('.animated-pman').style.visibility = 'visible';
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.main').classList.remove('.animated-pman');

        
        setTimeout(() => {
            document.querySelector('.main').classList.remove('.animated-pman');
            document.querySelector('.animated-pman').style.display = 'none';
            document.querySelector('.main').style.display = 'block';
        }, 7000);