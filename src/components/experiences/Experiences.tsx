import { Fragment, useMemo } from "react";

import type { TExperiences } from "@/types";

import { TechBadge } from "../ui";
import { Title } from "../projects";

export const Experiences = () => {
  const experiences: TExperiences[] = useMemo(
    () => [
      {
        role: `Développeur full-stack JS`,
        company: `Zénika`,
        city: `Nantes`,
        start: `Février 2023`,
        end: `Septembre 2023`,
        type: `Stage`,
        missions: [
          {
            client: `FAQ - Zénika`,
            details: [
              `Mis en place de tests e2e avec Playwright pour assurer la qualité et la stabilité du site.`,
              `Ajout de nouvelles fonctionnalités, dont la création d'un statut de spécialiste pour la validation de questions et l'intégration de l'API Google Translate pour la traduction de contenu.`,
              `Améliorer l'expérience de développement en migrant le projet de 'Create-React-App' vers 'Vite', ce qui a entraîné une augmentation significative de la rapidité et de l'efficacité.`,
              `Effectuer la mise à jour de React et de React-Router vers les dernières versions, permettant ainsi de bénéficier des dernières avancées technologiques.`,
              `Effectuer la mise à jour des dépendances Apollo GraphQL pour permettre l'utilisation des hooks de React ainsi que la gestion des requêtes GraphQL grâce à une seule dépendance ce qui permet de supprimer plusieurs autres.`,
            ],
            stack: [
              {
                icon: "logos:react",
                name: `React`,
              },
              {
                icon: "logos:playwright",
                name: `Playwright`,
              },
              {
                icon: "logos:vitejs",
                name: `Vite`,
              },
              {
                icon: "vscode-icons:file-type-prisma",
                name: `Prisma`,
              },
              {
                icon: "logos:graphql",
                name: `Graphql`,
              },
            ],
          },
        ],
      },
    ],
    []
  );

  return (
    <section id="experiences" className="mb-24 flex flex-col gap-12">
      <Title text="Expériences" />
      <ul className="mx-auto flex w-5/6 flex-col items-start gap-3 text-start">
        {experiences.map((experience, index) => (
          <li className="flex flex-col gap-6" key={index}>
            <div>
              <h4 className="text-2xl font-bold text-yellow-600">
                {experience.role}
              </h4>
              <p>
                <b>{experience.company}</b>, {experience.city}
              </p>
              <p>
                {experience.type} de <b>{experience.start}</b> à{` `}
                <b>{experience.end}</b>
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-12">
              {experience.missions.map((mission, missionIndex) => (
                <Fragment key={missionIndex}>
                  <ul className="list-disc">
                    <li className="list-none text-xl text-yellow-600">
                      <b>{mission.client}</b>
                    </li>
                    {mission.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-6">
                    {mission.stack.map((tech, techIndex) => (
                      <TechBadge tech={tech} index={techIndex} key={techIndex} />
                    ))}
                  </ul>
                </Fragment>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};