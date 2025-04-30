import { PropHandlerType } from "../components/PropHandler";

export const themeToggleProps: PropHandlerType[] = [
  {
    propName: "size",
    propType: "number",
    propDescription:
      "Controls the size (in pixels) of the theme toggle icons (Sun and Moon).",
    propDefault: "18",
  },
];

export const iconButtonProps: PropHandlerType[] = [
  {
    propName: "useDiv",
    propType: "boolean",
    propDescription:
      "Renders the component as a <div> instead of a <button>, useful when semantic button behavior is not needed.",
  },
  {
    propName: "variant",
    propType: `"default"\n| "rounded"\n| "unstyled"`,
    propDescription:
      'Applies visual styling to the button: "default" for standard, "rounded" for circular shape, and "unstyled" for no styles.',
    propDefault: `"default"`,
  },
  {
    propName: "className",
    propType: "string",
    propDescription:
      "Additional Tailwind CSS classes to apply to the button or div.",
  },
  {
    propName: "children",
    propType: "React.ReactNode",
    propDescription:
      "The content (typically an icon) displayed inside the button.",
  },
  {
    propName: "rest",
    propType: "ButtonHTMLAttributes<HTMLButtonElement>",
    propDescription:
      "Any valid props for a <button> element, such as onClick, type, disabled, etc.",
  },
];

export const animatedIconButtonProps: PropHandlerType[] = [
  {
    propName: "speed",
    propType: `"slow"\n| "medium"\n| "fast"`,
    propDescription:
      "Controls the speed of the animation. Affects how quickly the icon bounces or rotates.",
  },
  {
    propName: "animationType",
    propType: `"bounce"\n| "rotate"`,
    propDescription:
      'Determines the type of animation to apply to the icon: either "bounce" or "rotate".',
  },
  {
    propName: "className",
    propType: "string",
    propDescription:
      "Additional Tailwind CSS classes to apply to the button. Useful for overriding or extending animation styles.",
  },
  {
    propName: "children",
    propType: "React.ReactNode",
    propDescription:
      "The content (usually an icon) to render inside the animated button.",
  },
  {
    propName: "rest",
    propType: 'Omit<IconButtonProps, "variant">',
    propDescription:
      "All other props from IconButton, except 'variant' which is forced to 'rounded'. Includes standard button props like onClick, type, disabled, etc.",
  },
];

export const iconDrawerProps: PropHandlerType[] = [
  {
    propName: "rootProps",
    propType: "DialogProps",
    propDescription:
      "Props for the root Dialog component of the Drawer. It accepts the same props as a Radix Dialog component.",
  },
  {
    propName: "direction",
    propType: `"right"\n| "left"\n| "top"\n| "bottom"`,
    propDescription:
      'Defines the direction the drawer opens from. Default is "right".',
  },
  {
    propName: "animateTrigger",
    propType: "boolean",
    propDescription:
      "If true, the drawer trigger will be animated using the AnimatedIconButton component.",
  },
  {
    propName: "animationType",
    propType: `"rotate"\n| "bounce"`,
    propDescription:
      "Type of animation for the trigger button, either 'rotate' or 'bounce'.",
  },
  {
    propName: "animationSpeed",
    propType: `"fast"\n| "medium"\n| "slow"`,
    propDescription:
      "Speed of the animation for the trigger button. Can be 'fast', 'medium', or 'slow'.",
  },
  {
    propName: "drawerTrigger",
    propType: "React.ReactElement",
    propDescription:
      "The element that triggers the opening of the drawer. Usually an icon or button.",
  },
  {
    propName: "useBackdropEffects",
    propType: "boolean",
    propDescription:
      "If true, the backdrop of the drawer will have an effect (like a dimming background with blur).",
  },
  {
    propName: "OverlayProps",
    propType:
      "Omit<DialogOverlayProps & React.RefAttributes<HTMLDivElement>, 'ref'>",
    propDescription:
      "Props for customizing the overlay that appears when the drawer is open.",
  },
  {
    propName: "dismissible",
    propType: "boolean",
    propDescription:
      "If true, the drawer can be dismissed by clicking outside the drawer (on the overlay).",
  },
  {
    propName: "ContentProps",
    propType:
      "Omit<DialogContentProps & React.RefAttributes<HTMLDivElement>, 'ref'>",
    propDescription: "Props for customizing the content area of the drawer.",
  },
  {
    propName: "children",
    propType: "React.ReactNode",
    propDescription: "The content to be rendered inside the drawer.",
  },
  {
    propName: "drawerTriggerProps",
    propType: "DialogTriggerProps & React.RefAttributes<HTMLButtonElement>",
    propDescription:
      "Props for the button or element that triggers the drawer opening. Typically includes attributes like onClick, type, etc.",
  },
];

export const basicModalProps: PropHandlerType[] = [
  {
    propName: "rootProps",
    propType: "DialogProps",
    propDescription:
      "Props for the root Dialog component of the modal. It accepts the same props as a Radix Dialog component.",
  },
  {
    propName: "direction",
    propType: `"right"\n| "left"\n| "top"\n| "bottom"`,
    propDescription:
      'Defines the direction the modal opens from. Default is "right".',
  },
  {
    propName: "trigger",
    propType: "React.ReactElement",
    propDescription:
      "The element that triggers the opening of the modal. Typically a button or icon.",
  },
  {
    propName: "triggerText",
    propType: "string",
    propDescription:
      "Text content for the modal trigger. Optional, usually used in button-based triggers.",
  },
  {
    propName: "useBackdropEffects",
    propType: "boolean",
    propDescription:
      "If true, the backdrop of the modal will have an effect (like a dimming background with blur).",
  },
  {
    propName: "OverlayProps",
    propType:
      "Omit<DialogOverlayProps & React.RefAttributes<HTMLDivElement>, 'ref'>",
    propDescription:
      "Props for customizing the overlay that appears when the modal is open.",
  },
  {
    propName: "ContentProps",
    propType:
      "Omit<DialogContentProps & React.RefAttributes<HTMLDivElement>, 'ref'>",
    propDescription: "Props for customizing the content area of the modal.",
  },
  {
    propName: "children",
    propType: "React.ReactNode",
    propDescription: "The content to be rendered inside the modal.",
  },
  {
    propName: "position",
    propType: `"top"\n| "bottom"\n| "center"`,
    propDescription:
      'Defines the position of the modal on the screen. Can be "top", "bottom", or "center". Default is "center".',
  },
  {
    propName: "disabledTrigger",
    propType: "boolean",
    propDescription: "If true, disables the modal trigger element.",
  },
  {
    propName: "hideTrigger",
    propType: "boolean",
    propDescription: "If true, hides the modal trigger element.",
  },
  {
    propName: "rest",
    propType: "any",
    propDescription:
      "Any other props passed to the Drawer component or underlying elements.",
  },
];

export const horizontalScrollBoxProps: PropHandlerType[] = [
  {
    propName: "children",
    propType: "React.ReactNode",
    propDescription:
      "The content to be rendered inside the horizontal scroll container. This should be elements that will be scrolled horizontally.",
  },
  {
    propName: "disableLeftFade",
    propType: "boolean",
    propDescription:
      "If true, disables the fade effect on the left side of the container. Default is false.",
  },
  {
    propName: "disableRightFade",
    propType: "boolean",
    propDescription:
      "If true, disables the fade effect on the right side of the container. Default is false.",
  },
  {
    propName: "disableFade",
    propType: "boolean",
    propDescription:
      "If true, disables both the left and right fade effects. Default is false.",
  },
  {
    propName: "fadeColor",
    propType: "string",
    propDescription:
      "Sets the color of the fade effect. Default is 'currentcolor'.",
  },
  {
    propName: "className",
    propType: "string",
    propDescription:
      "Custom class names to style the outer container of the horizontal scroll box.",
  },
];

export const collapseProps: PropHandlerType[] = [
  {
    propName: "children",
    propType: "React.ReactElement",
    propDescription:
      "The content that will be collapsed or expanded. This should be a React element.",
  },
  {
    propName: "open",
    propType: "boolean",
    propDescription:
      "Controls whether the collapse is open or closed. If true, the content is expanded. If false, it is collapsed.",
  },
];

export const toastifyProps: PropHandlerType[] = [
  {
    propName: "label",
    propType: "string",
    propDescription:
      "The message to be displayed in the toast notification. This is the main content of the toast.",
  },
];

export const helperProps: PropHandlerType[] = [
  {
    propName: "children",
    propType: "React.ReactNode",
    propDescription:
      "The content to be displayed inside the helper component, typically some text.",
  },
  {
    propName: "colorScheme",
    propType: `"secondary" 
| "info" 
| "primary" 
| "success" 
| "warning" 
| "error"`,
    propDescription:
      "Defines the color scheme of the helper component. Possible values include 'secondary', 'info', 'primary', 'success', 'warning', and 'error'. Default is 'primary'.",
  },
  {
    propName: "icon",
    propType: "React.ReactElement",
    propDescription:
      "An optional icon to be displayed beside the text. If not provided, a default 'BadgeInfo' icon is used.",
  },
  {
    propName: "iconSize",
    propType: "number",
    propDescription: "Defines the size of the icon. Default is 20.",
  },
  {
    propName: "className",
    propType: "string",
    propDescription: "Additional custom class names to style the component.",
  },
];

export const userProfilePictureProps: PropHandlerType[] = [
  {
    propName: "imageUrl",
    propType: "string | undefined",
    propDescription:
      "The URL of the image to be displayed as the user's profile picture. If undefined, a default image icon is used.",
  },
  {
    propName: "size",
    propType: `"default" 
| "small"`,
    propDescription:
      "The size of the profile picture. 'default' shows a larger image, while 'small' shows a smaller image. Default is 'default'.",
  },
  {
    propName: "uploader",
    propType: "boolean",
    propDescription:
      "Determines if the profile picture is clickable for uploading a new image. Default is false.",
  },
  {
    propName: "onFileUploaded",
    propType: "(files: FileList | null) => void",
    propDescription:
      "A callback function that is triggered when a file is uploaded. It provides the list of files uploaded. This is only called if 'uploader' is set to true.",
  },
];

export const userCardFullProps: PropHandlerType[] = [
  {
    propName: "className",
    propType: "HTMLDivElement['className']",
    propDescription:
      "An optional custom className to be added to the root div of the component.",
  },
  {
    propName: "user",
    propType: `User 
| undefined`,
    propDescription:
      "The user object that holds the data for the user being displayed in the card.",
  },
  {
    propName: "customDisableButtons",
    propType: "boolean",
    propDescription:
      "Optional prop to disable the action buttons. If set to true, buttons like Edit and Remove will be disabled.",
  },
];
