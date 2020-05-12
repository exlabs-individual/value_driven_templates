Can you recall the situation when you and your team had a meeting regarding some new functionality or choice of technology?

Usually after such meetings, everyone comes out with new knowledge, e.g. from now on we will be using a relational database using Postgresql.

In other words, everyone is properly informed about the selected architecture and technology.

And now let's imagine the situation that after 3-4 months a new developer joins our team. And this developer starts asking questions about architecture and technology, e.g. _why we use the repository pattern?_ or _why we chose a relational database?_

There will probably be a problem remembering the answers to such questions, because nowhere have we written down the answers to these questions and what we have established some time ago simply disappeared in the world.

## And here comes Architecture Decision Record (ADR)

So what is ADR? Which ADR we can answer on such questions we mention before about why we using such software, why are we creating our architecture in such shape, and many more. We can split drivers into five different classes. The first is is a **business use case**, it is a list of functions that defines our software.

Another class is - **qualitative attributes**, for example our system should be scalable and secure. Next we have **design restrictions** - We will not choose technology, we don't know, because we know that it takes too much time.

Another class of controllers are **conventions** - here we bound technologies we are pretty good at, so relational database? Use PostgreSQL, non-relational database? Use MongoDB. And when we need to make a decision that we are going to use relational database, we know that we use PostgreSQL.

The last driver is **design goals** - if we creating a prototype there is no need to use all the fancy stuff like elasticsearch, relational database and many more. Design goals guide us to choose tool combinations.

## How to write ADR?

ADR is a simple text document. There is no one formula. ADR should include a **title** that presents the decision, the **context** of the decision, **consequences** of theses of the decisions, which we agree to this. And the **decision** by itself. Those are the minimum values ​​for ADR.

![ADR example](https://structurizr.com/static/img/help/decision-log-2.png)

## How we can store ADR?

ADR can be kept anywhere, what is most important is that ADR was in one place and that every member had access to all ADRs - this is the place we call ADL or **Architecture Decision Log**. We can keep this ADL directly in the repository or in another place, e.g. Google Drive, Miro, Confluence and many others.

## The formula of Exlabs team

In exlabs we have a tested pattern, which we use most often, what it looks like, you can check out [here](https://exlabs.github.io/value_driven_templates/articles/architecture-decision-record/adr-template.md)
