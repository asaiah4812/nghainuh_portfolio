const darkMode = () => {

    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    const theme = localStorage.getItem('theme');

    theme && document.body.classList.add(theme);

    const handleThemeToggle = () => {
          document.body.classList.toggle('light-mode');
          if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
          } else {
            localStorage.removeItem('theme');
          }
    };
    
    themeToggleBtns.forEach(btn => 
        btn.addEventListener('click', handleThemeToggle)
    );
};

export default darkMode;