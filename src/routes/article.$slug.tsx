import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { GoldRule, Ornament } from "@/components/Ornament";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { articles, getArticle } from "@/data/articles";
import { useLang, pick } from "@/lib/i18n";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/article/$slug")({
  loader: ({ params }) => {
    if (params.slug === "naissance-empire-mali") {
      return { article: null as any, isKirina: true as const };
    }
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article, isKirina: false as const };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.article;
    if (!a) return { meta: [{ title: "Article" }] };
    return {
      meta: [
        { title: `${a.title.fr} — La Maison du Mandé` },
        { name: "description", content: a.excerpt.fr },
        { property: "og:title", content: a.title.fr },
        { property: "og:description", content: a.excerpt.fr },
      ],
    };
  },
  notFoundComponent: NotFoundArticle,
  component: ArticlePage,
});

function NotFoundArticle() {
  const { t } = useLang();
  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center px-6 py-32 text-center">
        <div>
          <p className="font-display text-xs tracking-[0.4em] uppercase text-gold">404</p>
          <h1 className="mt-4 font-display text-4xl text-burgundy-deep">{t("article_not_found")}</h1>
          <Link
            to="/"
            className="inline-block mt-8 font-display text-xs tracking-[0.3em] uppercase bg-burgundy-deep text-ivory px-8 py-4 hover:bg-gold hover:text-burgundy-deep transition-colors"
          >
            {t("go_home")}
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const { lang, t } = useLang();

  const title = pick(lang, article.title);
  const date = pick(lang, article.date);
  const body = pick(lang, article.body);

  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const backTo =
    article.category === "histoire"
      ? "/empire"
      : article.category === "humanitaire-local" || article.category === "humanitaire-international"
      ? "/humanitaire"
      : "/communication";

  return (
    <div className="min-h-screen flex flex-col bg-ivory">
      <SiteHeader />

      <section className="relative pt-16 pb-12 px-6 bg-secondary/40 border-b border-gold/30">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            to={backTo}
            className="inline-flex items-center gap-2 font-display text-[0.7rem] tracking-[0.3em] uppercase text-burgundy hover:text-gold transition-colors"
          >
            <ArrowLeft size={14} /> {t("back_to")}
          </Link>
          <p className="mt-6 font-display text-xs tracking-[0.4em] uppercase text-gold">{date}</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl text-burgundy-deep text-balance leading-tight">
            {title}
          </h1>
          <GoldRule className="mt-6" />
        </div>
      </section>

      <article className="mx-auto max-w-3xl w-full px-6 py-16">
        <ImagePlaceholder label={article.imageLabel} aspect="aspect-[16/9]" className="mb-12 shadow-elegant" />

        <div className="font-serif text-lg leading-[1.85] text-foreground/90 space-y-6 text-justify">
          {body.map((p: string, i: number) => (
            <p
              key={i}
              className={
                i === 0
                  ? "first-letter:font-display first-letter:text-7xl first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none first-letter:text-burgundy"
                  : ""
              }
            >
              {p}
            </p>
          ))}
        </div>

        <Ornament className="my-16" />

        {related.length > 0 && (
          <div>
            <p className="text-center font-display text-xs tracking-[0.4em] uppercase text-gold">
              {t("related")}
            </p>
            <GoldRule className="mt-4 mb-10" />
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to="/article/$slug"
                  params={{ slug: r.slug }}
                  className="block border border-gold/30 bg-card p-6 hover:shadow-royal hover:border-gold transition-all"
                >
                  <p className="font-display text-[0.65rem] tracking-[0.3em] uppercase text-gold">
                    {pick(lang, r.date)}
                  </p>
                  <h3 className="mt-2 font-display text-lg text-burgundy-deep leading-snug">
                    {pick(lang, r.title)}
                  </h3>
                  <div className="gold-rule my-3 w-10" />
                  <p className="text-muted-foreground text-sm">{pick(lang, r.excerpt)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      <SiteFooter />
    </div>
  );
}
