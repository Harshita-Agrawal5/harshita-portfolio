/* Reset and base */
* {
  box-sizing: border-box;
  margin: 0; padding: 0;
  font-family: 'Poppins', sans-serif;
}
body {
  background: linear-gradient(135deg, #FFDEE9 0%, #B5FFFC 100%);
  color: #333;
  line-height: 1.6;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
a {
  color: #d6336c;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}
a:hover {
  color: #6f42c1;
}
header {
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-radius: 10px;
  margin: 1rem auto;
  max-width: 900px;
}
header h1 {
  font-size: 2.8rem;
  color: #6f42c1;
  margin-bottom: 0.3rem;
}
header p {
  font-size: 1.2rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 1rem;
}
nav a {
  margin: 0 1rem;
  font-size: 1.1rem;
  padding: 0.3rem 0.7rem;
  border-radius: 25px;
  background: #d6336c;
  color: white;
  box-shadow: 0 3px 6px rgba(214, 51, 108, 0.5);
  transition: background 0.3s ease;
}
nav a:hover,
nav a.active {
  background: #6f42c1;
  box-shadow: 0 4px 10px rgba(111, 66, 193, 0.7);
}

main {
  flex-grow: 1;
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.08);
}
section {
  margin-bottom: 2.5rem;
}
section h2 {
  font-size: 2rem;
  color: #d6336c;
  margin-bottom: 1rem;
  border-bottom: 3px solid #6f42c1;
  padding-bottom: 0.3rem;
  width: fit-content;
}
#about p {
  font-size: 1.1rem;
  color: #444;
}

.project {
  background: white;
  border-left: 6px solid #d6336c;
  padding: 1rem 1.5rem;
  margin-bottom: 1.3rem;
  border-radius: 8px;
  box-shadow: 0 3px 8px rgba(214, 51, 108, 0.15);
  transition: transform 0.3s ease;
}
.project:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(214, 51, 108, 0.3);
}
.project h3 {
  color: #6f42c1;
  margin-bottom: 0.4rem;
}
.project p {
  color: #555;
  margin-bottom: 0.5rem;
}
.project a {
  margin-right: 1rem;
  font-weight: 600;
}

#resume a {
  display: inline-block;
  background: #6f42c1;
  color: white;
  padding: 0.6rem 1.3rem;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: 0 6px 15px rgba(111, 66, 193, 0.5);
  transition: background 0.3s ease;
}
#resume a:hover {
  background: #d6336c;
  box-shadow: 0 6px 20px rgba(214, 51, 108, 0.7);
}

#contact p {
  margin-bottom: 0.6rem;
  font-size: 1.1rem;
}
#contact a {
  font-weight: 600;
  color: #6f42c1;
}

footer {
  text-align: center;
  padding: 1rem;
  background: #d6336c;
  color: white;
  font-weight: 600;
  border-radius: 0 0 10px 10px;
  box-shadow: 0 -2px 15px rgba(214, 51, 108, 0.7);
  margin-top: auto;
}

/* Responsive */
@media (max-width: 600px) {
  nav a {
    display: inline-block;
    margin: 0.3rem 0.5rem;
  }
  header h1 {
    font-size: 2rem;
  }
  section h2 {
    font-size: 1.5rem;
  }
}
