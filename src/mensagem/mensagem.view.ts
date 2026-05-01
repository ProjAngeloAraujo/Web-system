import { escapar } from "../utils/decorators/escapar.js";
import { View } from "../utils/View.js";

export class MensagemView extends View<string> {

    @escapar
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }

}