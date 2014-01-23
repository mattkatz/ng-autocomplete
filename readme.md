#angular autocomplete

#How should it work

<autocomplete-input ng-model="tags" onAccept="function" suggestions="availableTags" acceptMultiple="true" multipleSeparator="," minLength="2"/>

## ng-model
Stores accepted suggestions in ng-model. As someone types, nothing affects ng-model till they either accept a suggestion or type the multiple separator. If acceptMultiple is false, stores everything.

## onAccept
triggers when user does any of the accept actions: tab, enters multiple sep, hits down/up arrows and then enter.

## suggestions
accepts an iterable or a function that accepts 0 or 1 parameters. The function will be passed the current fragment

## acceptMultiple
Should we accept multiples?

## multipleSeparator
Default of "," but we can concatenate with anything

## minLength
default of 2 characters before we do anything
