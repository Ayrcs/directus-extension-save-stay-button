import { defineInterface } from "@directus/extensions-sdk";
import { defineComponent, h, ref, resolveComponent } from "vue";

function dispatchKeyboardEvent(type, init) {
  const target = document.activeElement || document.body;
  const event = new KeyboardEvent(type, {
    bubbles: true,
    cancelable: true,
    composed: true,
    ...init,
  });

  target.dispatchEvent(event);
}

function dispatchSaveShortcut() {
  dispatchKeyboardEvent("keydown", { key: "Control", code: "ControlLeft", ctrlKey: true });
  dispatchKeyboardEvent("keydown", { key: "s", code: "KeyS", ctrlKey: true });
  dispatchKeyboardEvent("keyup", { key: "s", code: "KeyS", ctrlKey: true });
  dispatchKeyboardEvent("keyup", { key: "Control", code: "ControlLeft" });
}

const SaveStayButton = defineComponent({
  name: "SaveStayButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "Sauvegarder",
    },
  },
  setup(props) {
    const saving = ref(false);
    const VButton = resolveComponent("v-button");

    function save() {
      if (props.disabled || saving.value) return;

      saving.value = true;
      dispatchSaveShortcut();
      window.setTimeout(() => {
        saving.value = false;
      }, 700);
    }

    return () =>
      h(
        "div",
        { class: "save-stay-button-interface" },
        h(
          VButton,
          {
            disabled: props.disabled || saving.value,
            onClick: save,
          },
          () => props.label,
        ),
      );
  },
});

export default defineInterface({
  id: "save-stay-button",
  name: "Bouton Sauvegarder",
  icon: "save",
  description: "Affiche un bouton qui declenche le raccourci de sauvegarde Directus sans quitter la page.",
  component: SaveStayButton,
  options: [
    {
      field: "label",
      name: "Libelle",
      type: "string",
      meta: {
        width: "half",
        interface: "input",
        options: {
          placeholder: "Sauvegarder",
        },
      },
      schema: {
        default_value: "Sauvegarder",
      },
    },
  ],
  types: ["alias"],
  localTypes: ["presentation"],
});
