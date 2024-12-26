import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatisticsSection from './components/StatisticsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ResearchSection from './components/ResearchSection';
import ContactSection from './components/ContactSection';
import SingleProjectPage from './components/SingleProjectPage';
import ScrollToHash from './components/ScrollToHash';

function App() {
  const osDescription = `
    <p>This operating system was built from scratch, combining hardware-level interaction with high-level abstractions to implement essential and advanced OS functionalities:</p>
    <ul>
      <li><strong>UART Communication:</strong> Asynchronous, interrupt-driven I/O for efficient device interaction.</li>
      <li><strong>Interrupt Handling:</strong> A robust mechanism for managing hardware and software events using a PLIC.</li>
      <li><strong>Multithreading:</strong> Cooperative multitasking with thread creation, yielding, joining, and synchronization via condition variables.</li>
      <li><strong>Forking:</strong> Process creation with independent execution flows and memory duplication.</li>
      <li><strong>Virtual Memory:</strong> Dynamic memory allocation and isolation with page-level management.</li>
      <li><strong>Filesystem:</strong> Multi-level directory support and file operations like read/write.</li>
      <li><strong>VirtIO Integration:</strong> Virtualized device management for efficient block storage interaction.</li>
      <li><strong>ELF Binary Support:</strong> Loading and execution of ELF binaries with memory mapping and symbol resolution.</li>
      <li><strong>System Calls:</strong> A rich set of user-kernel APIs for file, process, and device management.</li>
    </ul>
    <p>The demo shows a program that forks and run trek and rule30 simultaneously. Interrupts are used for multithreading and UART is used for user input.</p>
  `;
  
  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <section id="home">
                <HeroSection />
              </section>
              <section id="about">
                <AboutSection />
              </section>
              <section id="statistics">
                <StatisticsSection />
              </section>
              <section id="projects">
                <ProjectsSection />
              </section>
              <section id="experience">
                <ExperienceSection />
              </section>
              <section id="research">
                <ResearchSection />
              </section>
              <section id="contact">
                <ContactSection />
              </section>
            </div>
          }
        />
        <Route
          path="/os-project"
          element={
            <SingleProjectPage
              title="Operating System Design"
              description={osDescription}
              media={{ type: 'video', src: '/assets/projects/OS-demo.mov' }}
              resources={[]}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
