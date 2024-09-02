# AI Simulator Design

## Basic Overview

**We'll model the system based on the following properties and descriptions.**

- The entire program is modelled as a single `environment` where `events` happen.
- There are entities within an environment who `respond` to `events`.
- The entity can be `sentient` or `non-sentient`.
- Both, sentient and non-sentient entities can respond to `environment events` depending on their nature. For instance, putting your hand on a rock won't cause any harm, but putting your hand on a fire could put out the fire.
- At the start of the `timeline`, entities are `spawned`.
- Entites can interact with each other through `verbal` or `action` modes.
- Entites can be in a `action-loop` where they are performing an action repeatedly to reach a `goal state` or a `termination state`.
- Entities have `internal events` and `external events`. Internal events are known to the `god` but not known to other entities in the environment whereas external events get broadcasted into the environment.
- An event has a `influence range` which decides how far it gets transmitted.
- Events can be of 3 types: `natural event` , `entity event` or `god event` (artificially created event).
- Entities can have `attributes` that affect their behavior and responses.
- Entities can have `relationships` with other entities, influencing their interactions.
- The environment can have `resources` that entities can utilize or compete for.
- Entities can have `goals` that drive their actions and decision-making.
- The system can have `rules` that govern the behavior and interactions of entities.
- Entities can have `knowledge` that affects their understanding and decision-making.
- The environment can have `constraints` that limit the actions and behaviors of entities.
- Entities can have `emotions` that influence their responses and interactions.
- The system can have `time` that progresses and affects the state of entities and the environment.
- Entities can have `memory` that allows them to remember past events and experiences.
- The environment can have `boundaries` that define the limits and scope of the system.
- Entities can have `communication` abilities to exchange information with other entities.
- The system can have `randomness` that introduces unpredictability into events and outcomes.
- Entities can have `learning` capabilities to adapt and improve their behavior over time.
- The environment can have `obstacles` that entities must navigate or overcome.
- Entities can have `perception` abilities to sense and interpret the environment and events.
- The system can have `feedback` mechanisms to provide information and reinforcement to entities.
- Entities can have `motivations` that drive their actions and decision-making.
- The environment can have `dynamics` that change over time, affecting the behavior of entities.
- Entities can have `roles` or positions within the system that define their responsibilities and capabilities.
- The system can have `emergent behavior` where complex patterns and interactions arise from simple rules and entities.
- The environment can have `spatial dimensions` that entities navigate and interact within.
- The system can have `feedback loops` that allow entities to adapt and respond to changes in the environment.
- Entities can have `decision-making` processes that determine their actions and responses.
- Entities can have `senses` that allow them to perceive and interpret the environment and events.
- The system can have `stochastic processes` that introduce randomness and uncertainty into events and outcomes.
- Entities can have `communication channels` to exchange information and messages with other entities.
- The environment can have `rewards` or incentives that influence the behavior and decision-making of entities.
- Entities can have `cognitive abilities` that affect their thinking, reasoning, and problem-solving skills.
- The system can have `feedback mechanisms` that provide information and evaluation to entities.
- Entities can have `adaptation` capabilities to adjust their behavior and responses based on changing circumstances.
- The environment can have `interactions` or relationships with external systems or environments.
- Entities can have `preferences` or biases that influence their choices and actions.
- The system can have `optimization` goals to maximize certain criteria or objectives.
- The environment can have `constraints` or limitations on the actions and behaviors of entities.
- Entities can have `decision-making algorithms` that guide their choices and actions.
- Entities can have `knowledge representation` to store and utilize information.
- The environment can have `dynamic elements` that change and evolve over time.
- Entities can have `planning` abilities to strategize and sequence their actions.
- The environment can have `constraints` or limitations on the actions and behaviors of entities.
