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
import MultiProjectPage from './components/MultiProjectPage';

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
  const pacmanDescription = `
    <p>This project is a hardware recreation of the classic <strong>Pac-Man</strong> game on an FPGA, combining graphics rendering, user input handling, and basic AI for dynamic gameplay. The implementation was divided into several phases, each adding unique features to enhance the game:</p>
    <ul>
      <li><strong>Maze Rendering:</strong> A tile-based maze consisting of 30x30 tiles was designed in SystemVerilog. Each tile corresponds to a specific maze component, such as walls or open paths, dynamically drawn using a color mapper.</li>
      <li><strong>Pac-Man Movement:</strong> Pac-Man is animated and controlled using keyboard inputs. Movement logic ensures it remains centered within tiles, interacts with maze boundaries, and teleports seamlessly between sides of the screen through passageways.</li>
      <li><strong>Sprite Animations:</strong> Pac-Man cycles through three states (closed, half-open, fully open) while moving, and features a unique death animation. Ghosts have directional animations with distinct frightened and death states, implemented through finite state machines (FSMs).</li>
      <li><strong>Pellet System:</strong> Regular and power pellets are mapped onto the maze. Consuming a pellet updates the game state, while power pellets trigger a frightened mode for ghosts, allowing Pac-Man to capture them for bonus points.</li>
      <li><strong>Ghost AI:</strong> Ghosts follow different movement strategies depending on their state (chase, scatter, frightened, or dead). The AI dynamically calculates target tiles and paths, avoiding reversals to mimic classic arcade logic.</li>
      <li><strong>Scoring and Endgame:</strong> The score is dynamically updated and displayed in decimal form on the screen. The game ends when Pac-Man loses all lives or consumes all pellets, transitioning to win or game-over screens.</li>
    </ul>
    <p>This FPGA implementation integrates hardware modules with MicroBlaze-based software logic to create an immersive, arcade-like experience. Future enhancements could include sound effects, multiple levels, and varied game speeds for increased challenge.</p>
  `;
  const pianoDescription = `
    <p>This electronic piano circuit was built to explore the fascinating process of converting electrical signals into audio signals, combining music with electronics. The project highlights several key technical aspects:</p>
    <ul>
      <li><strong>555 Timer Integration:</strong> The circuit uses a 555 timer IC in astable mode to generate audio frequencies corresponding to the notes of the C-Major scale.</li>
      <li><strong>RC Network Tuning:</strong> Each note's frequency is determined by the resistor-capacitor network. Adjusting the resistance modifies the timer's oscillation frequency, which directly impacts the pitch.</li>
      <li><strong>Manual Note Tuning:</strong> Resistors were fine-tuned using a guitar tuner app to achieve precise frequencies for each note. Through trial and error, it was discovered that increasing resistance lowers the frequency.</li>
      <li><strong>Series vs. Parallel Configuration:</strong> Resistors were placed in series to achieve the desired resistance values, as parallel configurations reduced the total resistance.</li>
      <li><strong>Audio Amplification:</strong> A transistor-based amplifier increases the signal strength from the 555 timer, driving a speaker to produce audible sound.</li>
      <li><strong>Power Supply:</strong> The circuit is powered by a 9V battery for portability and ease of use.</li>
    </ul>
    <p>Although the piano successfully plays the C-Major scale, the design was limited by the number of push buttons, preventing the inclusion of sharps and flats. Future iterations could incorporate more keys using additional 555 timers or multiplexing techniques.</p>
    <p>This project provided valuable insights into circuit design, frequency tuning, and the creative integration of music and technology.</p>
  `;
  const ledCubeDescription = `
    <p>This project involved designing and building a <strong>6x6x6 LED cube</strong>, consisting of 216 LEDs soldered together to form a three-dimensional matrix. The cube operates with the negative ends of the LEDs grounded, while the positive ends are connected to a microcontroller for precise control.</p>
    <ul>
      <li><strong>Hardware Assembly:</strong> Each LED was soldered meticulously to ensure structural integrity and electrical connectivity. This involved careful planning to align rows and columns for the 3D layout.</li>
      <li><strong>Microcontroller Integration:</strong> A microcontroller was programmed to send bit patterns that illuminate specific LEDs, enabling dynamic lighting effects. Patterns were coded to create animations and sequences across the cube.</li>
      <li><strong>Challenges:</strong> The project required learning microcontroller programming to create the desired patterns and mastering soldering techniques to connect the 216 LEDs accurately without shorts or breaks.</li>
    </ul>
    <p>This LED cube showcases a blend of hardware design and programming, creating visually striking light patterns and animations. Future improvements could include adding real-time interactivity or expanding the size and complexity of the cube.</p>
  `;
  const reflexTesterDescription = `
    <p>This project involved building a <strong>reflex tester circuit</strong> to measure reaction times, using a combination of 555 timers and a 4026B counter chip. The circuit functions by starting with a reset button to initialize the clock, followed by a delay triggered by the yellow LED. Once the delay ends, the user must press the stop button as quickly as possible, halting the counter to display the reaction time.</p>
    <ul>
        <li><strong>Timer Configurations:</strong> The 555 timers operate in three modes:
            <ul>
                <li>Monostable mode for generating the delay signal using a capacitor to control the timing.</li>
                <li>Bistable mode for alternating between stable high and low outputs, triggered by external inputs.</li>
                <li>Astable mode for creating continuous pulses to drive the 4026B counter chip.</li>
            </ul>
        </li>
        <li><strong>4026B Chip Integration:</strong> The 4026B chip increments the displayed count with each pulse received from the timer. The setup was calibrated to ensure precise timing using resistors, capacitors, and a potentiometer for fine-tuning.</li>
        <li><strong>Challenges:</strong> Understanding the various modes of the 555 timer and the operation of the 4026B chip, as well as troubleshooting wiring errors and ensuring stable connections for accurate functionality.</li>
    </ul>
    <p>Once calibrated, the circuit displayed reaction times with accuracy down to 1/100 of a second. This project highlights the application of timing circuits, digital counters, and logic gates, providing insights into real-world timing and counting mechanisms used in devices like scoreboards and timers.</p>
  `;
  const roboticCarDescription = `
    <p>This project involved creating a <strong>sound-controlled robotic car</strong> that reacts to sound signals to change its direction. The system integrates multiple subsystems:</p>
    <ul>
        <li><strong>Microphone Module:</strong> Converts sound signals into electrical signals, with a capacitor for AC coupling to filter out DC components.</li>
        <li><strong>Amplifier:</strong> Amplifies and inverts the microphone's output, enabling the activation of the DRAM circuit.</li>
        <li><strong>DRAM Circuit:</strong> Stores the car's state and ensures stable operation using a restore circuit with capacitors, resistors, and Schmitt triggers.</li>
        <li><strong>H-Bridge Circuit:</strong> Controls motor direction by managing current flow, allowing the car to move forward, backward, or turn based on sound-triggered inputs.</li>
    </ul>
    <p>The design required precise tuning of components, such as resistors and capacitors, to achieve reliable performance. By combining these circuits, the car dynamically responds to sound signals, demonstrating principles of electronics, signal processing, and robotics.</p>
`;
  const psychedelicDescription = `
  <p>This project, Psychedelic MP, explores the creative use of WebGL to produce a visually engaging, non-polygonal 2D animation of dynamic and colorful patterns. It combines foundational WebGL knowledge with shader programming to create real-time graphics:</p>
  <ul>
    <li><strong>Canvas Rendering:</strong> A single canvas is used to display the animation, with all rendering controlled via GLSL shaders.</li>
    <li><strong>Vertex Shader (vs.glsl):</strong> Generates a full-screen triangle pair, efficiently covering the entire canvas with fragments for processing. Outputs fragment-specific positional data to ensure viewport-independent rendering.</li>
    <li><strong>Fragment Shader (fs.glsl):</strong> Creates smooth, space- and time-varying patterns using mathematical functions and trigonometric modulation. A uniform float <code>seconds</code> provides temporal animation.</li>
    <li><strong>Performance Optimization:</strong> Techniques such as avoiding warp-breaking branching are implemented to maximize GPU efficiency during rendering.</li>
  </ul>
  <p>The provided example animations use polynomial functions combined with sine and cosine for color modulation.</p>
  `;

  const orbitsDescription = `
  <p>This project, Orbits MP, focuses on creating a dynamic 3D animation of a stylized solar system using WebGL. It demonstrates key concepts in 3D graphics, matrix-based transformations, and shader programming:</p>
  <ul>
    <li><strong>Geometry and Models:</strong>  Both tetrahedron and octahedron models are sent to the GPU once and reused multiple times per frame for efficient rendering.
     </li>
    <li><strong>Depth and Perspective:</strong> Depth testing and perspective projection ensure the correct rendering of overlapping and distant objects.</li>
    <li><strong>Scene Graph and Motion:</strong> The solar system animation includes:
      <ul>
        <li>A large spinning octahedron as the Sun, fixed at the origin.</li>
        <li>An orbiting and spinning octahedron as the Earth, accompanied by a smaller, orbiting tetrahedron as the Moon, always facing the Earth.</li>
        <li>An octahedron as Mars, orbiting slower than Earth, with two orbiting tetrahedrons (Phobos and Deimos) demonstrating different speeds and sizes.</li>
      </ul>
      All motions are implemented using model matrices computed in JavaScript and sent as uniforms to the GPU.</li>
    <li><strong>Custom Transformations:</strong> Axial tilt and proportional motion scales are optional but supported, enhancing the animation's realism and visual appeal.</li>
  </ul>
  <p>The resulting animation is an engaging and educational demonstration of matrix transformations, reusable GPU resources, and real-time 3D rendering principles.</p>
`;

const rasterizerDescription = `
<p>The Rasterizer MP is a comprehensive project aimed at implementing a simplified version of the WebGL2 rendering pipeline. It emphasizes understanding the core principles of 3D graphics rendering, including rasterization, interpolation, and state management:</p>
<ul>
  <li><strong>Core Functionality:</strong> The project involves creating a program that reads input from a .txt file and generates a .png output. Key components include:
    <ul>
      <li><strong>DDA Algorithm:</strong> Implements the Digital Differential Analyzer for line rasterization.</li>
      <li><strong>Scanline Rendering:</strong> Renders triangles by interpolating attributes across the screen, pixel by pixel.</li>
      <li><strong>Viewport Transformation:</strong> Maps normalized device coordinates to pixel coordinates for accurate rendering.</li>
    </ul>
  </li>
  <li><strong>Elective Features:</strong> Additional elective components provide opportunities to enhance the renderer with advanced capabilities:
    <ul>
      <li><strong>Depth Testing:</strong> Ensures proper occlusion of overlapping objects using a per-pixel depth buffer.</li>
      <li><strong>sRGB Conversion:</strong> Handles color space conversion for accurate brightness and color representation.</li>
      <li><strong>Hyperbolic Interpolation:</strong> Improves perspective-correct rendering for attributes like color and texture coordinates.</li>
      <li><strong>Frustum Clipping:</strong> Clips triangles against the view frustum for proper visibility.</li>
    </ul>
  </li>
  <li><strong>Input and Output:</strong> The program processes keywords from input files to set rendering modes, define vertex attributes (e.g., position, color), and issue draw commands (e.g., triangles, elements).</li>
</ul>
<p>The project fosters a deep understanding of graphics systems by recreating the inner workings of a rasterizer. </p>
`;

  const fpgaProjects = [
    {
      name: 'PacMan',
      image: '/assets/projects/fpga/pacman.jpg',
      color: '#80B7BD',
      link: '/pacman-project',
      description: 'Recreated the iconic Pac-Man arcade game on an FPGA, featuring a tile-based maze, animated sprites, and dynamic ghost AI.',
    },
  ];

  const circuitryProjects = [
    {
      name: 'Electronic Piano',
      image: '/assets/projects/circuitry/electronic-piano.png',
      color: '#212F56',
      link: '/piano-project',
      description: 'Created an electronic piano circuit with a 555 timer, featuring a playable C-Major scale and hands-on tuning for accurate note pitch.',
    },
    {
      name: 'LED Cube',
      image: '/assets/projects/circuitry/LED-cube.png',
      color: '#994F6C',
      link: '/LED-cube-project',
      description: 'Built a 6x6x6 LED cube with 216 LEDs, controlled via a microcontroller to display custom patterns, showcasing soldering skills and programming for precise LED control.',
    },
    {
      name: 'Robotic Car',
      image: '/assets/projects/circuitry/robotic-car.png',
      color: '#80B7BD',
      link: '/robotic-car-project',
      description: 'Built a sound-controlled robotic car that moves and changes direction based on audio signals, integrating a microphone, amplifier, DRAM, and restore circuits for efficient state management and sound-driven motion.',
    },
    {
      name: 'Reflex Timer',
      image: '/assets/projects/circuitry/reflex-timer.png',
      color: '#C4899F',
      link: '/reflex-timer-project',
      description: 'I built a reflex tester circuit using 555 timers and a 4026B counter chip to measure reaction times. The circuit operates with precision, utilizing different timer modes and a digital counter to display reaction times down to 1/100 of a second.',
    },
  ];
  
  const graphicsProjects = [
    {
      name: 'Rasterizer',
      image: '/assets/projects/graphics/rasterizer/mycull.png',
      color: '#80B7BD',
      link: '/rasterizer-project',
      description: 'Created a simplified WebGL2 rendering pipeline, featuring functionalities like DDA/scanline algorithms for rasterization, viewport transformations, and depth testing',
    },
    {
      name: 'Psychedelic',
      image: '/assets/projects/graphics/psychedelic.jpg',
      color: '#80B7BD',
      link: '/psychedelic-project',
      description: 'Created mesmerizing 2D animation that renders time- and space-varying visuals on a single canvas, leveraging trigonometric modulation for smooth transitions',
    },
    {
      name: 'Orbits',
      image: '/assets/projects/graphics/orbits.jpg',
      color: '#80B7BD',
      link: '/orbits-project',
      description: 'Recreated the iconic Pac-Man arcade game on an FPGA, featuring a tile-based maze, animated sprites, and dynamic ghost AI.',
    },
  ];
  
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
        {/* OS Section */}
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
        {/* FPGA Section */}
        <Route
          path="/fpga-projects"
          element={
            <MultiProjectPage
              title="FPGA Projects"
              projects={fpgaProjects}
            />
          }
        />
        <Route
          path="/pacman-project"
          element={
            <SingleProjectPage
              title="PacMan Project"
              description={pacmanDescription}
              media={{ type: 'video', src: '/assets/projects/fpga/pacman-demo.mov' }}
              resources={[
                { label: 'Final Project Report', link: '/assets/projects/fpga/final-project-report.pdf' }
              ]}
            />
          }
        />
        {/* Circuitry Section */}
        <Route
          path="/circuitry-projects"
          element={
            <MultiProjectPage
              title="Circuitry Projects"
              projects={circuitryProjects}
            />
          }
      />
        <Route
          path="/piano-project"
          element={
            <SingleProjectPage
              title="Electronic Piano"
              description={pianoDescription}
              media={{ type: 'video', src: '/assets/projects/circuitry/piano-demo.mov' }}
              resources={[]}
            />
          }
        />

        <Route
          path="/LED-cube-project"
          element={
            <SingleProjectPage
              title="LED Cube Project"
              description={ledCubeDescription}
              media={{ type: 'video', src: '/assets/projects/circuitry/LED-cube-demo.MOV' }}
              resources={[]}
            />
          }
        />

        <Route
          path="/robotic-car-project"
          element={
            <SingleProjectPage
              title="Robotic Car Project"
              description={roboticCarDescription}
              media={{ type: 'video', src: '/assets/projects/circuitry/robotic-car-demo.MOV' }}
              resources={[
                { label: 'Final Project Report', link: '/assets/projects/circuitry/Robotic Car Final Report.pdf' }
              ]}
            />
          }
        />

        <Route
          path="/reflex-timer-project"
          element={
            <SingleProjectPage
              title="Reflex Timer Project"
              description={reflexTesterDescription}
              media={{ type: 'video', src: '/assets/projects/circuitry/reflex-timer-demo.mov' }}
              resources={[]}
            />
          }
        />
        {/* Graphics Section */}
        <Route
          path="/graphics-projects"
          element={
            <MultiProjectPage
              title="Interactive Computer Graphics Projects"
              projects={graphicsProjects}
            />
          }
      />
        <Route
          path="/rasterizer-project"
          element={
            <SingleProjectPage
              title="Rasterizer Project"
              description={rasterizerDescription}
              media={{ type: 'gallery', items: [
                { type: 'image', src: '/assets/projects/graphics/rasterizer/my2d3d.png' },
                { type: 'image', src: '/assets/projects/graphics/rasterizer/myalpha.png' },
                { type: 'image', src: '/assets/projects/graphics/rasterizer/mycull.png' },
                { type: 'image', src: '/assets/projects/graphics/rasterizer/mydepth.png' },
                { type: 'image', src: '/assets/projects/graphics/rasterizer/myfrustum.png' },
                { type: 'image', src: '/assets/projects/graphics/rasterizer/mygammabox.png' },
                { type: 'image', src: '/assets/projects/graphics/rasterizer/mymatrix.png' },
                { type: 'image', src: '/assets/projects/graphics/rasterizer/myperspective.png' },
    
              ],}}
              resources={[
                { label: 'Final Project Report', link: '/assets/projects/fpga/final-project-report.pdf' }
              ]}
            />
          }
        />
        <Route
          path="/psychedelic-project"
          element={
            <SingleProjectPage
              title="Psychedelic Graphics"
              description={psychedelicDescription}
              media={{
                type: 'webgl',
                width: 300,
                height: 300,
                driverScript: '/assets/projects/graphics/psychedelic/driver.js', // Path to driver.js
                mathScript: '/assets/projects/graphics/psychedelic/math.js',   // Path to math.js
              }}
              resources={[]}
            />
          }
        />  
        <Route
          path="/orbits-project"
          element={
            <SingleProjectPage
              title="Orbits Simulation"
              description={orbitsDescription}
              media={{
                type: 'webgl',
                width: 300,
                height: 300,
                driverScript: '/assets/projects/graphics/orbits/driver.js', // Path to driver.js
                mathScript: '/assets/projects/graphics/orbits/math.js',   // Path to math.js
              }}
              resources={[]}
            />
          }
        />       
      </Routes>
    </Router>
  );
}

export default App;
