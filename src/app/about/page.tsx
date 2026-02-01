export default function About() {
  return (
    <div className="flex items-center pt-10">
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-3xl font-bold">
          <span className="text-accent">&gt;</span> about me
        </h1>

        <div className="text-lg text-white/80 leading-relaxed space-y-6">
          <p>
            I'm Rachit Srivastava. I like to make backend systems and love
            low-level programming. I also enjoy using Linux, currently I'm using
            Arch Linux as my main operating system.
            currently:
          </p>

          <p>
            I mostly work in programming languages like Rust, Golang,
            TypeScript, and C++. I like statically-typed languages because of my
            OCD. I love working in the terminal mostly, no particular reason I
            just like it You can find me on Twitter, posting stuff about my
            journey.
          </p>

          <div className="pl-8 font-mono text-lg text-white/70">
            <p>My setup includes:</p>
            <div className="mt-2 space-y-1">
              <p>~ neovim</p>
              <p>~ tmux</p>
              <p>~ fish shell</p>
              <p>~ spotify</p>
            </div>
          </div>

          <p>
            Currently I'm working on my startup and trying to ship it asap.
            Working on side projects for learning each day and building
            something useful for people.
          </p>

          <p className="text-white/60 text-lg italic">
            Building something really cool that'll help you learn stuff fast and
            preserve it.
          </p>
        </div>

        <div className="mt-8 flex gap-4 text-lg">
          <span className="text-white/50">Based in</span>
          <span className="font-bold">Bengaluru, India </span>
        </div>
      </div>
    </div>
  );
}
