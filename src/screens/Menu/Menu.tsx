import "./Menu.scss";
import { MenuButton } from "@/shared/atoms/MenuButton/MenuButton";
import { Modal } from "@/shared/atoms/Modal/Modal";
import { useEffect, useState } from "react";

console.log(
  "[Menu.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

function Menu() {
  const [bg, setBg] = useState(1);

  useEffect(() => {
    const timeout = window.setInterval(() => {
      setBg((value) => (value + 1) % 2);
    }, 60000);

    return () => {
      window.clearInterval(timeout);
    };
  }, []);
  return (
    <div className={`Menu bg${bg}`}>
      <div className="menu-block">
        <MenuButton variant="outlined">New Game</MenuButton>
        <MenuButton variant="outlined" disabled>
          Continue
        </MenuButton>
        <MenuButton variant="outlined">Settings</MenuButton>
        <MenuButton variant="outlined">Quit</MenuButton>
      </div>
      <Modal
        open
        sx={{
          position: "fixed",
          inset: "auto 2rem 10rem auto",
          // bottom: "10rem",
          // right: "2rem",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aliquid
          enim itaque? Labore delectus qui ipsam fugiat at, eius, error vero
          cumque eligendi voluptas inventore. Tempore, eum iusto? Maxime,
          ducimus? Porro quo exercitationem minima voluptatem? Eum consectetur
          itaque perspiciatis vitae dolore sit eius necessitatibus repudiandae
          tempore atque aliquid ratione quia nisi sed minus, minima, reiciendis
          rem, eligendi molestiae excepturi fugit. Animi quidem quam tenetur
          nemo cum voluptates sint quas, ex, ipsum eos maxime exercitationem
          nulla est nobis optio, mollitia beatae aliquam labore dolore esse!
          Fuga pariatur debitis nobis nihil totam. Magni, id soluta. Sunt
          obcaecati saepe eligendi, quidem dolore natus maiores illum labore
          officiis, enim voluptatem exercitationem quam voluptatum? Aliquid
          quae, nesciunt doloribus illo laborum quasi quaerat deleniti
          perspiciatis odio? Voluptatem autem earum, dolores accusamus unde
          natus consectetur minus sapiente facilis distinctio alias voluptatum,
          laborum deleniti excepturi ipsum, quod iure est vitae saepe. Saepe
          aliquam molestiae praesentium quod nulla labore! Nisi, beatae dolorem.
          Similique harum accusamus, ullam blanditiis minima ratione enim animi
          ut. Unde quas aspernatur omnis quod consequuntur odit facere, ullam
          similique laboriosam, modi accusantium numquam quae architecto
          aliquid. Facilis quasi corrupti omnis, sequi odio nihil itaque
          nostrum. Fugiat laudantium similique sequi nostrum illum eum unde
          quam, voluptate molestias tenetur magnam non nobis et atque facilis
          impedit quaerat explicabo? Facere et, fuga culpa voluptatem voluptates
          accusamus sed corrupti ipsum sapiente obcaecati, reiciendis, nisi
          commodi veritatis nobis ea molestias. Quaerat itaque quo ut, quisquam
          labore consectetur voluptatum aliquam magni autem! Incidunt
          perferendis nemo deserunt voluptatum provident, quis modi eos quasi
          excepturi perspiciatis iure nam eius facere voluptates sapiente animi
          labore fugit praesentium unde? Adipisci obcaecati cumque magni dolore,
          dicta dolorum! Minima aspernatur repellendus quis expedita, labore
          pariatur. Esse adipisci eum recusandae impedit consectetur magnam
          alias eveniet, est perspiciatis cupiditate, fuga quibusdam repellat
          accusantium provident reprehenderit reiciendis aut quasi ipsa?
          Laborum. Animi reiciendis eaque consequatur praesentium, aspernatur
          totam similique esse dolorem facilis quidem voluptates qui consectetur
          quam reprehenderit ad neque veniam culpa suscipit commodi cupiditate
          dolores unde. Quibusdam, ex praesentium. Perferendis! Temporibus
          doloribus consequuntur ex voluptate, iure quisquam explicabo expedita
          similique earum dignissimos commodi labore! Autem obcaecati officiis
          mollitia aut sint dignissimos perspiciatis perferendis. Exercitationem
          excepturi enim error fugit, quia laudantium? Unde eum quae nulla
          laudantium beatae! Obcaecati, earum ipsam. Exercitationem libero odit
          dolor, a sunt obcaecati porro! Dolorem, aliquid itaque! Quasi qui,
          numquam sapiente reprehenderit perspiciatis enim aspernatur recusandae
          tempora! Aliquam repellendus vero accusantium quia cumque nostrum, ab,
          tempore fuga dolorum tempora eaque? Maxime tempore consequuntur itaque
          et eligendi ad asperiores molestias quod sunt, saepe accusantium,
          impedit obcaecati laboriosam earum? Non, placeat odio. Rerum provident
          veniam aspernatur alias. Nulla, consequatur exercitationem aperiam
          quas reiciendis vero velit. Soluta officiis ea sequi, quo adipisci
          consequatur quisquam, in amet unde ullam voluptatum iusto. Asperiores
          recusandae iusto, nostrum dolor blanditiis modi ex ullam! Dolorum
          autem dolore eveniet. Enim reprehenderit molestiae officiis similique
          consequatur aspernatur id, nulla itaque dolor iste illum deserunt.
          Doloribus, est sed! Sed iste modi iusto, quae doloremque ex voluptatum
          incidunt libero. Eveniet autem unde praesentium. Explicabo placeat
          quibusdam, totam rerum sit, odit reprehenderit sed vero, fugiat facere
          adipisci quae. Libero, odit! Quia tenetur mollitia dolor minus quidem,
          laborum illo adipisci at! Nostrum libero asperiores nesciunt
          voluptates eos? Ducimus dignissimos deserunt perspiciatis, ipsum
          facilis at fugiat exercitationem fuga ex autem, consequuntur
          cupiditate. Iure veniam odio facere velit adipisci. Exercitationem
          laboriosam accusamus obcaecati eligendi explicabo eaque magni,
          repellat distinctio, ratione dolorum, autem aspernatur culpa atque
          dolorem eveniet ipsum possimus beatae saepe excepturi hic!
          Voluptatibus exercitationem laudantium at repellat mollitia rem,
          nostrum nobis quibusdam unde quae maiores labore quo iusto doloribus
          saepe? Dignissimos sint ab officia odio explicabo. Veritatis eaque
          illum aliquam eum voluptates! Repellendus blanditiis repudiandae
          distinctio! Nihil voluptas commodi deleniti praesentium quos error,
          non alias est eius a suscipit nam maiores vitae? Amet voluptas eos
          architecto recusandae, delectus placeat alias libero facere? Molestias
          laboriosam minus iste eveniet odit, sequi, repudiandae a praesentium
          similique veniam fugit reiciendis id! Velit ipsa cupiditate excepturi
          voluptatibus voluptatum, ad itaque, assumenda laborum aliquam, eaque
          corrupti vel iste! Dignissimos sapiente eligendi porro, asperiores,
          quae praesentium eos nam eum officiis assumenda non, iste similique.
          Neque nemo repudiandae accusamus tenetur. Animi sint, ducimus quisquam
          impedit natus recusandae illo. Iure, atque. Necessitatibus iure ad
          repellendus in, nulla expedita adipisci eum ipsum, beatae voluptates
          placeat, delectus autem minus? Quam cupiditate consequatur, temporibus
          exercitationem quo nostrum eaque ducimus perferendis fuga nemo
          explicabo facilis? Accusamus, unde expedita? Minima soluta et vero
          placeat aut, deserunt ullam distinctio harum neque saepe blanditiis
          aliquam repudiandae magni repellat nulla accusantium amet libero!
          Minus ipsam illum possimus sapiente quaerat? Totam accusamus dolores
          officiis eum iusto repudiandae atque, excepturi ab at vel? Corporis
          dolorum laudantium facere debitis placeat tempora omnis impedit
          explicabo, consequuntur, similique quam autem culpa officiis ducimus
          temporibus! Ipsum laborum cum cumque atque voluptas deserunt
          voluptates possimus doloribus culpa amet nostrum ipsa dolorum
          cupiditate, a repellendus ad ipsam aperiam assumenda necessitatibus
          ducimus numquam. Perspiciatis accusantium delectus molestias aperiam!
          Dolores non, libero voluptas fuga itaque voluptatum amet ipsum
          deserunt repellendus quia suscipit, fugiat tempore doloribus adipisci
          rem ipsa vel sint ducimus nostrum esse? Molestiae alias optio mollitia
          perspiciatis reprehenderit? Iusto quisquam vitae harum dolor eos, quo
          adipisci commodi dicta voluptas error at nisi quasi vero nam repellat
          illo quas laboriosam quos, maiores voluptatem, aut ad vel inventore!
          Dolorem, nam! Totam recusandae quis doloribus assumenda, excepturi
          corrupti ab illum iste, officia aspernatur quam, hic incidunt
          obcaecati iure id vel veritatis asperiores delectus deleniti cumque
          accusamus saepe inventore amet quaerat. Reiciendis. Nisi, quod et
          doloribus ullam nemo fugit recusandae aut adipisci atque qui quam
          minus voluptatum in molestias, alias ut repellat aliquid sapiente
          porro neque. Libero consectetur nesciunt maxime laudantium sint. Sunt
          veritatis laborum animi libero ipsa atque rerum officia, praesentium
          eum. Recusandae, optio consequatur cupiditate alias aut a.
          Repellendus, impedit molestiae quidem consequatur rem deleniti libero
          perspiciatis vel aperiam velit! Consequatur nesciunt at iste assumenda
          dolorum maiores, quisquam commodi unde, laboriosam sint dignissimos
          incidunt veritatis minus nam laborum animi, maxime voluptatum. Quis,
          alias odit facere voluptates tempora a mollitia laudantium! Eius error
          nam sequi voluptate, delectus ex quisquam in at pariatur cumque
          laudantium rerum quam harum corrupti, ipsam, veritatis nulla odit!
          Aliquam sed tenetur placeat animi porro rerum numquam repellendus.
          Minus neque ex iste nobis placeat rem fugiat? Nostrum ea nobis
          voluptatibus architecto explicabo numquam quia. Facere blanditiis
          maiores libero eius omnis accusantium, voluptas itaque, nesciunt,
          velit nemo consequuntur debitis? Saepe reiciendis sint sed aliquam?
          Atque, ipsa doloremque maxime enim placeat in odio ad magnam dolores
          aliquam at itaque alias quibusdam inventore quia ut culpa ullam
          impedit delectus eius ea! Amet molestias enim, ex illum, error harum
          laborum beatae quo qui ullam similique. Necessitatibus obcaecati,
          voluptates itaque magni, molestiae hic beatae debitis veniam eum ad
          optio veritatis ipsum. Accusamus, ad. Praesentium odio nobis est
          nulla, non ea itaque id! Exercitationem, tempore iure. Esse aut
          debitis error necessitatibus nulla magnam itaque hic dolor nemo,
          voluptatum, repellendus nam, nesciunt natus ipsam at. Similique soluta
          eum eius, perferendis quasi ex, explicabo blanditiis iste odit totam
          nihil enim inventore nemo quo, itaque suscipit? Labore illo aliquam
          accusamus nisi ea eos velit expedita fugiat molestiae! Saepe tempore
          minus corrupti aspernatur est tenetur minima eligendi temporibus
          facere iure dignissimos numquam dolores voluptatibus omnis totam, at
          incidunt eos ad deleniti quibusdam. Ullam maxime asperiores velit quia
          cum! Aut, sapiente nihil corrupti provident exercitationem libero
          aperiam minima laudantium in facilis, delectus ut aspernatur, ea sit
          architecto excepturi obcaecati illum pariatur earum et iusto est
          reiciendis. Ipsum, expedita id? Nobis, necessitatibus quidem fugiat et
          atque non autem a quo accusamus, dignissimos asperiores sunt.
          Blanditiis saepe asperiores quae obcaecati maiores debitis excepturi
          aliquam, maxime reiciendis ipsa suscipit qui eligendi! Doloribus. Ab
          officiis fuga esse culpa modi, eos cumque eveniet dolore aliquam
          repellat voluptatum vero inventore, aut accusantium quo natus nisi
          cum. Sint necessitatibus qui, nulla laboriosam mollitia distinctio
          unde architecto! Officia quia in fuga molestiae. Provident
          consequuntur facilis, ex modi unde quod ad illum odit est vitae
          cupiditate atque accusantium quibusdam aut dolore natus minima
          repellat laudantium tenetur! Omnis, quibusdam! Dolores corporis
          laboriosam perferendis aperiam? Corrupti eveniet nemo, ratione nam
          quos sunt voluptates culpa reprehenderit repudiandae blanditiis eos
          non tenetur sit quisquam aspernatur! Ipsam quam voluptatibus delectus
          voluptatum, excepturi nostrum. Aut minima, libero culpa, fugit ex
          quisquam minus, optio quae fuga ad voluptas laborum deserunt?
          Repellendus minus consectetur in! Omnis fugiat assumenda ducimus
          repellendus repudiandae perferendis a velit, quas praesentium. Quae
          libero unde delectus ipsam, voluptas praesentium! Rem error, id ipsum
          temporibus fugit eaque sint tempore? Cupiditate, sapiente omnis vero,
          non beatae laudantium quo voluptates eum minima expedita voluptatibus
          eveniet! Quod error adipisci quidem consectetur necessitatibus ipsum
          ut architecto delectus minima? Fugit eum minima iure cum eaque nulla
          cupiditate id vitae laboriosam, illum nemo nobis iste, molestiae
          cumque blanditiis! Doloremque. Maiores cupiditate esse debitis modi
          neque quibusdam ex deleniti, est delectus molestias soluta molestiae
          illo enim laboriosam, iste temporibus dolore, veniam repellendus quasi
          aperiam voluptatibus aliquid. Omnis sapiente minima suscipit.
          Dignissimos obcaecati quae, corporis molestiae quas similique!
          Voluptates illo autem culpa, non quisquam impedit optio voluptas magni
          atque id ducimus reiciendis temporibus nihil qui hic accusamus
          similique exercitationem quae nesciunt? Blanditiis adipisci
          exercitationem consequatur veritatis vel. Alias cumque rem minus
          doloremque ex? Maiores labore reiciendis accusantium consequatur
          possimus tenetur quia mollitia! Alias quis voluptatum laboriosam,
          provident animi nihil sunt ut? Pariatur deserunt quisquam minus quidem
          incidunt molestiae itaque voluptates, sed quaerat, reiciendis debitis
          impedit hic animi est, excepturi praesentium illo. Dolorem veniam
          necessitatibus cum, sed rem sapiente sit quas placeat. Eius laudantium
          obcaecati nobis incidunt tenetur, pariatur impedit veniam illum
          repellendus nulla culpa temporibus rem nisi accusantium a facilis
          molestias ab blanditiis illo sint dolor! Eaque quisquam nihil quae
          ducimus! Laudantium, laboriosam aperiam similique adipisci, tempora
          pariatur quis neque laborum reprehenderit harum assumenda velit
          doloremque itaque consectetur? Voluptates omnis, assumenda soluta
          consequuntur reprehenderit, dignissimos nulla voluptate fugiat, quod
          laudantium quam? Cupiditate, et fugit! Quas commodi dolorem, officiis
          assumenda porro, non, necessitatibus voluptate quis adipisci
          perferendis reprehenderit soluta dolor doloremque cupiditate veritatis
          consequatur impedit nostrum! Vero aliquam nam maiores ratione
          blanditiis! Maxime voluptas distinctio inventore dolore error dicta
          mollitia quidem eius, amet quis! Atque architecto, vitae totam,
          maxime, nesciunt laboriosam aliquid reprehenderit velit deleniti odit
          illum voluptatem modi necessitatibus incidunt aperiam. Consequatur,
          iusto corporis obcaecati laborum dolore quod aut quisquam, nihil cum
          totam molestias quia quis porro eveniet possimus consequuntur
          veritatis ut odit itaque sunt quidem magnam dolorum mollitia
          reiciendis. Optio. Magni, inventore! Cumque laborum expedita excepturi
          perferendis iste qui deserunt, quas ut temporibus deleniti
          accusantium, saepe nihil possimus voluptas ullam veniam a voluptatem
          rerum, quisquam suscipit optio cum earum? Adipisci. Sint nesciunt
          mollitia tenetur tempore ducimus maiores iure pariatur doloribus
          reprehenderit quas maxime commodi officiis unde at assumenda enim
          quisquam adipisci voluptate, minima a, deserunt velit ut! Laboriosam,
          esse consequuntur? Earum eum quod corporis illo iusto et tenetur culpa
          voluptatibus explicabo dolore provident repellat facere, iste odio ea
          repellendus! Deleniti, exercitationem! Mollitia molestiae harum ex
          nisi perspiciatis cum deserunt repellendus! Atque unde, facilis
          asperiores reprehenderit perspiciatis maiores voluptatum iure, illum
          libero, ipsam quis! Quisquam doloribus ipsam facilis dolore dolores
          maiores. Placeat enim libero, earum odio hic modi alias beatae
          perspiciatis. Assumenda omnis maxime placeat, veniam ipsa debitis
          expedita ad quo earum dolore, dicta suscipit. Repellendus, a eligendi.
          Repellat nesciunt, vero nisi sed molestias voluptatum eligendi est
          perferendis doloribus eum deleniti. Maxime sunt totam provident alias
          rem aut nihil officia repellendus odit. Accusantium sed porro
          voluptas, et, eligendi animi at repellendus quasi dolorum ducimus
          nihil, voluptates officia temporibus vero expedita velit. Quae,
          laudantium iusto, doloremque distinctio voluptatum dolorem libero
          porro tempora sed accusamus commodi dolore qui laborum quos
          perferendis et esse enim! Tempora a odit expedita deleniti repellendus
          aliquid? Ad, voluptas. Debitis quaerat quidem corporis voluptates
          aperiam repellendus doloremque quas iusto fugiat possimus iure
          dolorum, et quos culpa minus voluptatem earum maiores ipsum. Pariatur
          fugit temporibus ullam tenetur voluptate consectetur facere! Fugit
          expedita accusamus incidunt quod asperiores aut vel accusantium, autem
          odio odit reiciendis temporibus ut doloremque voluptatum magnam ex
          deleniti assumenda libero dolore nam totam tenetur laboriosam nesciunt
          pariatur! Veniam. Sequi quam sed assumenda aliquid? Unde, rerum
          laudantium itaque obcaecati repellat excepturi officiis in amet omnis
          aspernatur eaque similique rem, ut qui illo, adipisci minima magnam
          architecto voluptatem voluptate voluptates. Modi assumenda ex quas
          minus quod, consectetur nemo maxime aspernatur, corporis hic magnam,
          beatae sunt similique necessitatibus labore accusamus nulla porro
          velit blanditiis. Cum, expedita nisi. Doloribus iusto quam eveniet!
          Quis odit ut voluptatibus, accusantium architecto accusamus dolorem
          nesciunt mollitia voluptas nisi provident obcaecati, saepe unde nobis
          commodi vero itaque excepturi qui sed sint dolore quibusdam eveniet
          eius? Rerum, explicabo. Quae repellendus, fuga obcaecati neque
          corporis corrupti recusandae libero accusamus, veniam maiores qui!
          Consequatur officiis accusantium dolores, culpa nisi corporis beatae,
          dolorum accusamus perspiciatis sapiente maxime assumenda quod saepe
          cupiditate. Voluptatibus alias, natus consequuntur sed velit
          repudiandae excepturi officiis esse impedit ratione ipsum praesentium
          deleniti mollitia fugit fugiat laboriosam unde. Excepturi explicabo,
          veritatis eius facilis dolor molestiae et dicta quisquam. Rerum
          deleniti expedita possimus eveniet numquam doloremque voluptate magni,
          minus atque id animi fugit iste incidunt, inventore voluptas nobis
          perspiciatis sed fuga. Iusto officiis nobis at sint esse vero sequi.
          Minus alias excepturi quis enim illo modi officiis, in ducimus saepe
          voluptatibus eum accusamus ratione nisi quasi magni. Ex praesentium
          rerum tempora minus voluptatibus voluptatum eos cupiditate eveniet
          rem? Error? Atque corporis consequatur aperiam autem, quia modi,
          fugiat obcaecati minus corrupti et veritatis. Earum sunt
          necessitatibus, tenetur quidem commodi asperiores modi et laudantium
          nam explicabo temporibus beatae. Autem, quia perspiciatis? Vel numquam
          dignissimos est soluta quas dolores tenetur culpa consequatur placeat
          nesciunt nihil fugiat nam suscipit magni, ad itaque dolore fuga sunt.
          Est ex at fugit minima optio saepe officia! At totam tenetur,
          reiciendis aut, laborum esse quia, dolore placeat corporis in officia
          facere dolorem voluptatem voluptate nostrum rerum error eius
          laudantium iste? Harum esse expedita cum possimus eaque incidunt!
          Repudiandae possimus ad asperiores sed placeat dicta quidem rem
          incidunt temporibus natus repellat pariatur voluptas, saepe corporis
          eos ipsa architecto vel nesciunt nihil? Vero veniam, voluptatibus
          facere enim odio error! Eligendi, tenetur labore? Pariatur commodi
          voluptatem beatae rerum laboriosam dolores voluptates veritatis
          accusantium provident repudiandae corporis debitis adipisci neque eum
          doloremque repellendus quam labore magnam, dolore distinctio. Odit,
          tempore excepturi. Expedita deleniti nulla et temporibus! Excepturi
          debitis sint impedit doloremque. Ullam quisquam commodi saepe,
          adipisci distinctio facilis nulla dolores quod necessitatibus nostrum.
          Dicta corrupti neque expedita molestias non illo nisi! Tenetur
          repellendus corporis eius exercitationem pariatur quas suscipit
          quibusdam amet aliquid. Ipsa incidunt vel unde asperiores pariatur
          soluta rem atque quia, alias vero exercitationem possimus aut quaerat
          adipisci iure? Harum? Iusto, tempora sapiente, magni praesentium
          dolores dolorum quisquam debitis fugiat, at quod quae veritatis qui
          fuga? Aspernatur, qui dicta atque cumque esse illo illum, porro nihil
          velit ipsam quasi sapiente? Provident, temporibus quibusdam, nulla,
          harum voluptas ab illum dolorem porro modi quaerat aliquid illo
          magnam? Temporibus voluptatibus reiciendis praesentium ullam quae
          facilis possimus accusamus deleniti. Nemo in temporibus sequi harum.
          Voluptate incidunt voluptatibus non blanditiis amet doloribus
          voluptatem, voluptatum provident dolore perferendis ducimus suscipit
          magni, beatae accusamus in autem, nulla odio. Sit enim veritatis
          voluptatum id perferendis voluptates autem dicta! Provident asperiores
          aut quia error hic est porro illo nostrum animi sunt, et perspiciatis
          quos ut quibusdam vero molestias ab blanditiis. Rerum excepturi
          numquam amet repudiandae accusantium aut fugit cupiditate. Sapiente
          nihil libero facilis nulla expedita esse obcaecati necessitatibus
          optio harum sint dignissimos corporis, sunt, fugit accusantium? Sint,
          provident modi commodi maxime et fugiat ea non? Tempore numquam
          eligendi sint! Quia qui odio quaerat illo libero culpa, quos magnam
          est! Ipsum tenetur, voluptates facilis excepturi minus odio distinctio
          nisi totam soluta reprehenderit saepe? Sit temporibus dolorum,
          nesciunt nulla quam amet? Rerum sit unde mollitia ratione doloremque
          vitae optio, eius labore vel, ab necessitatibus soluta! Quae odit
          facilis ex minus sunt, ea dolorem vitae necessitatibus error cumque
          laboriosam neque dolores rerum? Ratione aliquam quam repellat nisi
          doloremque expedita, impedit debitis minima illum animi quos
          voluptatum voluptates beatae, quae cumque! Magni ducimus nobis
          similique cum sunt beatae, quisquam reiciendis vitae fugiat maxime?
          Veritatis ipsum impedit necessitatibus est quis doloribus! Eum ipsam
          eveniet voluptates. Commodi impedit perspiciatis numquam accusantium
          rem illo tempore, eius, hic fuga quo error facere quaerat tempora,
          nihil sint exercitationem. Mollitia quam ea illo beatae, nam ullam
          reiciendis debitis consequatur earum delectus modi suscipit dolores
          placeat quidem tempore. Beatae veritatis temporibus repudiandae
          molestiae numquam officia eos culpa corrupti quaerat assumenda!
          Laboriosam neque saepe a eius distinctio ipsam rem fugit cum alias,
          ut, repudiandae officiis veritatis voluptate explicabo possimus?
          Numquam non ducimus, perferendis recusandae provident hic atque
          voluptatem. Porro, nam expedita! Molestiae a corrupti rerum officia
          dolorum optio reiciendis est error, cum beatae ullam voluptatem eaque,
          neque quis eveniet ipsum dolores sint quidem odit minus ut quod enim
          quo id. Adipisci. Obcaecati nam sint exercitationem consequatur
          sapiente, accusantium itaque autem corrupti consequuntur!
          Exercitationem a aperiam nulla autem, aliquid esse consequatur
          consectetur error neque sit dolorum quos fugit eum dicta delectus
          omnis. Consequatur exercitationem, quibusdam eos odit dolor eius quo
          laboriosam voluptate dolorum ea deleniti voluptatibus nisi harum
          voluptates. Itaque quibusdam consectetur vel reiciendis beatae
          nesciunt dolorum quisquam veniam, perferendis ullam provident. Quam
          cum adipisci rerum repellat impedit sunt exercitationem possimus
          debitis repudiandae omnis enim optio quia corporis laboriosam ratione
          facilis nisi voluptate ex accusamus quod eveniet, alias quae vero!
          Perferendis, sequi. Inventore corporis ipsa doloremque atque molestias
          quaerat ea, ut iste. Tempora aspernatur error corrupti asperiores modi
          sit quis laudantium doloremque corporis, aliquam quia reprehenderit
          sed! Laborum provident illo quos velit. Sint officia repudiandae
          sapiente deleniti. Similique optio nesciunt velit dolorum itaque eum
          distinctio obcaecati minus sit earum. Doloremque, architecto maxime!
          Itaque voluptatibus molestiae neque earum, consequuntur alias in.
          Dolores, delectus? Doloremque perspiciatis quis illum quaerat libero
          tempora consectetur fuga molestiae nesciunt mollitia ut beatae cumque
          asperiores sed at, doloribus dolore excepturi! Incidunt ipsa iusto,
          eveniet minima aliquid asperiores! Nihil, esse. Ducimus reiciendis
          pariatur est natus aspernatur fuga enim culpa, quisquam explicabo
          repudiandae quas harum veritatis nisi consectetur consequuntur ullam
          nobis quo alias iste! Dolore nesciunt aliquam quae, magni
          necessitatibus odio. Debitis quidem quas voluptatum quibusdam
          cupiditate necessitatibus nesciunt exercitationem nihil iste, eligendi
          architecto eveniet ut magni dolorem labore id error beatae, quo
          officiis minus. Suscipit doloremque veritatis dicta minus eveniet.
          Sapiente repudiandae ipsam magni quam quod expedita eius cumque. Quam
          rem corporis velit nemo dolore, totam ullam consequatur? Dignissimos
          iste et tenetur quod assumenda enim recusandae autem praesentium
          expedita porro. Tempora corporis doloremque expedita fugit aliquam
          molestiae mollitia incidunt minus. Dignissimos, odio. Ipsa odit
          officia error iure optio debitis harum, fuga nobis rem corrupti beatae
          molestiae. Nihil saepe quidem cum. Illum fuga nulla a? Reprehenderit
          corrupti molestiae eos fugit itaque labore facere cumque optio.
          Officiis odit quisquam placeat soluta eius tempore nihil nisi maxime
          nobis doloremque, magni, aliquid molestias? Ipsam. Exercitationem
          debitis repellendus, reiciendis voluptatum sequi numquam nihil
          voluptas tempore culpa placeat inventore in harum vero saepe mollitia
          sed quia quasi dolore minus cupiditate! Fugit libero totam quibusdam
          consequatur repudiandae. Eaque quod corporis saepe ratione fuga.
          Officiis ipsum obcaecati ab harum pariatur, adipisci, quis reiciendis
          sed delectus molestias doloribus quas. Nemo nihil quod voluptas nulla,
          illum exercitationem ab dolorem autem. Eaque, optio. Libero commodi
          maxime ex ipsam dicta nisi perferendis corrupti quisquam id. Odit
          aliquid dolores delectus expedita repellendus voluptatum eveniet
          voluptas maxime, voluptate vel error nemo eius pariatur. Expedita.
          Reiciendis, deleniti libero? Quisquam adipisci sit consectetur vero
          sapiente voluptate, velit voluptatum tempora accusamus sint nostrum
          repudiandae assumenda, quis optio quia dolores eaque ducimus
          explicabo. Harum at praesentium molestias minus. Dignissimos deleniti
          possimus soluta reprehenderit consectetur est ullam, hic ex incidunt
          officia dolorum amet magni! Praesentium, ut. Ipsa libero est tempora,
          suscipit, corporis, consequatur eos repellendus ad debitis nihil
          voluptatibus. Similique quidem aliquam dignissimos inventore omnis
          commodi, quisquam nemo totam vero corrupti magnam iste sequi
          praesentium veritatis perspiciatis voluptatum quasi aliquid dolorem
          quibusdam laborum in minima cumque amet culpa? Esse! Rerum amet,
          placeat, ratione obcaecati velit eius eveniet repudiandae at et omnis
          tenetur vitae aut beatae tempora veniam vero molestias nisi expedita
          error sed, sint nesciunt asperiores. Reiciendis, provident minima.
          Dolorum fugiat possimus voluptatem quaerat illo id corporis
          repudiandae delectus consequuntur in, a laudantium. Sint eius earum
          repudiandae odio ipsum fuga quas iusto! Reprehenderit aperiam vero
          error sequi qui quam? Odio, necessitatibus. Animi mollitia accusantium
          quaerat eius quas provident! Nemo esse totam dolor harum id sequi
          explicabo numquam eaque aperiam saepe, libero, alias adipisci
          voluptatem sapiente fugiat. Repellat, esse explicabo. Rerum fuga,
          repudiandae id harum ipsum beatae accusantium minima nihil quam ipsam
          est ratione possimus repellat nesciunt tempore et reiciendis quaerat
          quae facilis! Nisi ipsam atque exercitationem odio quas illo! Vel,
          error. Porro in harum facere quisquam eum laudantium iste ab dolorum
          aperiam adipisci minus quae voluptates eius qui odit impedit, ad
          possimus atque esse cumque assumenda voluptatum quaerat neque. Debitis
          quae in libero voluptate id illo iure odit quia sunt obcaecati earum
          mollitia facere porro ducimus eligendi consequatur minima atque
          facilis at, quaerat voluptatem quam delectus excepturi maxime?
          Numquam. Quibusdam a, at quis accusantium, quod suscipit, est rerum
          veniam eaque dolorum reiciendis? Quis vel doloremque est eligendi
          itaque exercitationem tenetur rerum quas quaerat expedita? Nam aperiam
          quasi autem quae. Odit fugit dolore ipsa ratione dolores enim ex
          similique magnam laboriosam et error porro aliquid nesciunt in impedit
          nulla, unde iusto quisquam sequi ut obcaecati repudiandae quo?
          Repudiandae, natus omnis? Officia rem necessitatibus hic voluptatem
          animi laudantium ab cupiditate consequuntur quam consectetur
          reiciendis numquam nihil quod iure dolore autem tenetur corrupti
          inventore nulla accusantium illo reprehenderit magnam, pariatur
          molestias? Libero. Harum voluptatem beatae commodi officia doloribus
          nihil iure odit quam eos iste. Eveniet eligendi excepturi dolores
          itaque fuga voluptates reiciendis deserunt accusamus laborum magnam
          eius, porro, nam accusantium unde vitae? Dignissimos vel quas at
          quaerat assumenda dolorem rerum aliquid, ratione similique alias modi
          totam tempora beatae! Nisi nulla tenetur inventore perspiciatis, sunt,
          illo eligendi eos aut voluptate, numquam ea quas?
        </p>
      </Modal>
    </div>
  );
}

export default Menu;
