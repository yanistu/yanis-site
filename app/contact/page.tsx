import Container from "../../components/Container";
import Card from "../../components/Card";
import Button from "../../components/Button";

const WHATSAPP_URL =
  "https://wa.me/21650435185?text=Bonjour%20Yanis%2C%20je%20souhaite%20un%20diagnostic%20digital%20gratuit.%0A%0A1)%20Activit%C3%A9%20%2B%20ville%20:%20...%0A2)%20Objectif%20principal%20(1%20seul)%20:%20...%0A3)%20Aujourd%E2%80%99hui%2C%20je%20trouve%20des%20clients%20via%20:%20...%0A4)%20Budget%20:%20...%0A5)%20Urgence%20:%20...";

const EMAIL = "yanisghtu@gmail.com";
const MAILTO = `mailto:${EMAIL}?subject=Demande%20de%20diagnostic%20digital%20PME`;

export default function ContactPage() {
  return (
    <Container>
      <div className="space-y-10">
        <section className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contact
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-700 sm:text-lg">
            Le plus simple : WhatsApp. Envoyez 5 infos (activité, objectif, canal actuel,
            budget, urgence) et je vous réponds rapidement.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <Card>
            <div className="text-base font-semibold">Option 1 : WhatsApp</div>
            <p className="mt-2 text-sm text-neutral-700">
              Diagnostic guidé en 2 minutes. Parfait pour démarrer vite.
            </p>
            <div className="mt-4">
              <Button href={WHATSAPP_URL} variant="primary">
                Ouvrir WhatsApp (diagnostic gratuit)
              </Button>
            </div>
            <p className="mt-3 text-sm text-neutral-600">📞 +216 50 435 185</p>
          </Card>

          <Card>
            <div className="text-base font-semibold">Option 2 : Email</div>
            <p className="mt-2 text-sm text-neutral-700">
              Envoyez : activité, ville, objectif, situation actuelle, budget et délai.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={MAILTO} variant="secondary">
                Envoyer un email
              </Button>
              <Button href="/offre" variant="secondary">
                Voir l’offre
              </Button>
            </div>
            <p className="mt-3 text-sm text-neutral-600">📩 {EMAIL}</p>
          </Card>
        </section>
      </div>
    </Container>
  );
}
