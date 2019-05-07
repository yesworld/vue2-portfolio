import { DirectiveBinding } from 'vue/types/options'
import { DirectiveOptions } from 'vue'

const directive: DirectiveOptions = {
  inserted(el: HTMLElement, bind: DirectiveBinding) {

    let parallax = document.getElementsByClassName('parallax')[0]

    let f = (evt: Event) => {
      if (bind.value(evt, el)) {
        parallax.removeEventListener('scroll', f)
      }
    }
    parallax.addEventListener('scroll', f)

    /**
     * Using value:
     * v-colorDirective={color: 'red', backgroundColor: 'blue'}
     */
    // if (bind.value) {
    //   el.style.backgroundColor = bind.value.backgroundColor;
    //   el.style.color = bind.value.color;
    // }

    /**Using modifiers:
     * v-colorDirective.color
     * v-colorDirective.backgroundColor
     */
    // if (bind.modifiers.color){
    //   el.style.color = bind.value;
    // }
    //
    // if (bind.modifiers.backgroundColor) {
    //   el.style.backgroundColor = bind.value;
    // }
  }
}

export default directive
