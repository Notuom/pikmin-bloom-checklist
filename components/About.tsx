import * as React from "react";

export const About: React.FC = () => (
  <>
    <section>
      <h3>What is this?</h3>
      <p>
        This web app is a checklist to help you keep track of which type of
        Decor Pikmin you have collected in the Pikmin Bloom game available for
        Android and iOS.
      </p>
      <h3>How does it work?</h3>
      <p>
        Click on the icon corresponding to the collected Decor Pikmin to change
        its status: ❌ ➡ 🌿 ➡ 🥚 ➡ ✅.
      </p>
      <p>
        It will be saved on this device until you clear your browser&apos;s
        storage.
      </p>
      <p>Legend:</p>
      <ul>
        <li>❌: Not acquired</li>
        <li>🌿: Seedling acquired/growing</li>
        <li>🥚: Pikmin acquired/growing</li>
        <li>✅: Decor Pikmin Acquired</li>
      </ul>
      <p>
        You can also share your progress between devices by using the
        &quot;Share&quot; button which will generate a URL containing your
        collection to be sent to the other device, and clear your progress with
        the &quot;Clear&quot; button.
      </p>
      <h3>Why?</h3>
      <p>
        The collection screen in Pikmin is hard to browse. This web app makes it
        easier to quickly see which Decor Pikmin you are missing. Additionally,
        the in game collection screen does not allow you to keep track of
        individual alphabet stickers.
      </p>
      <h3>Decor Pikmin?</h3>
      <p>
        If you have no idea how Decor Pikmin work, I&apos;d suggest starting
        here:{" "}
        <a
          href="https://www.pikminwiki.com/Decor_Pikmin"
          target="_blank"
          rel="noreferrer"
        >
          https://www.pikminwiki.com/Decor_Pikmin
        </a>{" "}
        or reading the sections below.
      </p>
      <h4>How do I get Decor Pikmin?</h4>
      <p>
        In Pikmin Bloom, every Pikmin you get has the potential to become a
        &quot;Decor Pikmin&quot;. This can happen two different ways:
      </p>
      <ol>
        <li>
          You get the Pikmin from a Huge Seedling. Once it is grown into a
          Pikmin, it will have decor based on the type of place it was found in.
        </li>
        <li>
          You get up to the maximum level of friendship (4 full hearts). Once
          this happens, a special expedition will be available for this Pikmin
          to go on by itself, and it will come back with a decor matching the
          type of place it was found in.
        </li>
      </ol>
      <h4>
        What are the stickers (<span className="sticker">A</span>,{" "}
        <span className="sticker">0</span>)?
      </h4>
      <p>
        Roadside Pikmin get a sticker&mdash;undeniably the most boring decor out
        of them all. However, each of the sticker has a letter which is the
        first letter from the name of the place the Pikmin was found.
      </p>
      <p>
        If you&apos;d like, you can track which stickers you have for each
        Pikmin using the sticker rows, though that is optional. The game
        doesn&apos;t currently track this.
      </p>
      <h4>How do I know which Decor Pikmin I have?</h4>
      <p>
        In order to know which ones you already have, you can check your
        &quot;Decor Collector&quot; badge progress. To do so:
      </p>
      <ol>
        <li>
          Tap your user profile from the home screen (the panel that shows your
          username)
        </li>
        <li>Tap the Decor Collector badge</li>
      </ol>
      <p>
        This will show you all the Decor Pikmin you already have. If you want to
        get all the Decors as swiftly as possible, you could mark the Seedlings
        and Pikmin of a color and type of Decor you don&apos;t already have and
        prioritize growing and making friends with those first.
      </p>
      <h4>How do I know which Decor a Pikmin or Seedling will get?</h4>
      <p>
        This depends on the type of location the Seedling was obtained in, which
        you can find on both the Seedling page and the Pikmin page. The Forest
        and Supermarket types have two different variations which the Pikmin
        will randomly get when it is decorated.
      </p>
    </section>
    <footer>
      <h3>Credits and licensing</h3>
      <p>
        <strong>Disclaimer:</strong> This web app is not affiliated with Niantic
        or Nintendo.
      </p>
      <ul>
        <li>
          Application icon created from{" "}
          <a
            href="https://thenounproject.com/icon/checklist-5020438/"
            target="_blank"
            rel="noreferrer"
          >
            Checklist by Mada Creative from NounProject.com
          </a>{" "}
          and{" "}
          <a
            href="https://thenounproject.com/icon/flower-5021607/"
            target="_blank"
            rel="noreferrer"
          >
            Flower by Ria Fitriana from NounProject.com
          </a>{" "}
          using{" "}
          <a href="https://www.gimp.org/" target="_blank" rel="noreferrer">
            Gimp
          </a>
          . Favicons created using{" "}
          <a
            href="https://realfavicongenerator.net"
            target="_blank"
            rel="noreferrer"
          >
            Favicon Generator
          </a>{" "}
          and <a href="https://maskable.app/editor">Maskable.app</a>.
        </li>
        <li>
          Decor Icons retrieved from{" "}
          <a
            href="https://www.pikminwiki.com/Decor_Pikmin"
            target="_blank"
            rel="noreferrer"
          >
            https://www.pikminwiki.com/Decor_Pikmin
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/term/beetle/396855/"
            target="_blank"
            rel="noreferrer"
          >
            Beetle by Erik Jensen from the Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/term/banana/2770445/"
            target="_blank"
            rel="noreferrer"
          >
            banana by Izwar Muis from the Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/term/mushroom/3194002/"
            target="_blank"
            rel="noreferrer"
          >
            Mushroom by Adrien Coquet from the Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/term/acorn/4408016/"
            target="_blank"
            rel="noreferrer"
          >
            Acorn by KP Arts from the Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/icon/chess-piece-2375089/"
            target="_blank"
            rel="noreferrer"
          >
            Chess Piece by Vectors Point from NounProject.com
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/icon/skateboard-1293915/"
            target="_blank"
            rel="noreferrer"
          >
            Skateboard by Orin zuu from Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/icon/pumpkin-700084/"
            target="_blank"
            rel="noreferrer"
          >
            pumpkin by Yeong Rong Kim from Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/icon/june-of-hwatu-1629155/"
            target="_blank"
            rel="noreferrer"
          >
            june of hwatu by 1516 from Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/icon/candy-4080734/"
            target="_blank"
            rel="noreferrer"
          >
            candy by alfian dwi hartanto from Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://www.flaticon.com/free-icon/2023-2025_9243079"
            target="_blank"
            rel="noreferrer"
          >
            2023 icons created by muhammad atho' from Flaticon
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/icon/envelope-5393196/"
            target="_blank"
            rel="noreferrer"
          >
            envelope by Icon Market from Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/icon/envelope-5395044/"
            target="_blank"
            rel="noreferrer"
          >
            envelope (inverted) by Icon Market from Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/icon/space-suit-1652614/"
            target="_blank"
            rel="noreferrer"
          >
            space suit by Maxim Kulikov from Noun Project
          </a>
        </li>
        <li>
          <a
            href="https://thenounproject.com/icon/mitten-2099950/"
            target="_blank"
            rel="noreferrer"
          >
            mitten by Ninejipjip from Noun Project
          </a>
        </li>
      </ul>
      <p>
        Created with{" "}
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
          Next.js
        </a>
        .
      </p>
      <h3>Contributions</h3>
      <p>
        <strong>Suggestions, corrections, bug reports?</strong> Please{" "}
        <a
          href="https://github.com/Notuom/pikmin-bloom-checklist"
          target="_blank"
          rel="noreferrer"
        >
          file an issue or open a pull request on GitHub
        </a>
        .
      </p>
    </footer>
  </>
);
