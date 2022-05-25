import {animate, state, style, transition, trigger} from "@angular/animations";

export let fade =  trigger('fade', [
  state('void', style({ opacity: 0})),
  transition('void <=> *', [
    animate(2000)
  ]),
])

export let flyInOut = trigger('flyInOut', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(-100%)' }),
    animate(100)
  ]),
  transition('* => void', [
    animate(100, style({ transform: 'translateX(100%)' }))
  ])
])
