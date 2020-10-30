import { newTrigger } from "./trigger";
import { Config } from "./types";

export async function start(config: Config) {
    // const trigger = newTrigger(config)
    const triggers = config.triggers.map(triggerConfig => newTrigger(triggerConfig))

    
}