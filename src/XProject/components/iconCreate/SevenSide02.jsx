function SevenSide02({data}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="280" height="75" viewBox="0 0 280 75" fill="none">
            <defs>
                <pattern
                    id="pattern0_344_267"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <image
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANXSURBVHgB7ZzPbhMxEMYdlEMj0WsUuBGpIDVSxAPAA3DjUbnxAPAAqBJIBSnc2qpXkMotyJu4nZ3435d1vPbu/KRqu02zm347Hs+Mx50sVudbtef1+xeKcnY9Uz6u7jcqBn5dzs8vt83x4u/E+3u/nm9b5x/ftq/7/esd9H6UqRIauPCcT99uxy0WtWSbVa7eLVrnncTiT0OrP2SSWZZ+MhfK7nO2n+/U5MNC1U5Vw/BgovijsvJMCdGIWAAiFkARPssV49DZNRTY5mB0cRYVXc/SCDIMAbyW9e/NQ+v8MvNUXRrZhqFJlimhfAyFpyepMwoZhgBVO/gf50/f2yw3NS2x+A1LmK5LQupZHrjPyyLWbPlKrS0/39zsjsuX7VnX1JZoFYPGRKkqGLbr+IYzJBb1EfzCrvLMkEhmWb769lr1g62m38VCYbHozWzW1HVRIIbUM1/s3yRxFkBjWc5Iep/ecF/VBzQ6X1lez1H/F8sCSB462KzUhAguuFWUOrMOJii1ZRuhetXjSnjkw4kSa2zxlAvxWQDVDsPNTbtp5Yy9zguXKRhVIq1zVMpjZjHfHR42v73vL0os46TRhYRciM8CELEAsgxDU6+KTUms1YACVpbEsgAGLZa2UF1eMV9dgYeh76ap1wG7YBaEL8lnCuWoIUGjxYppUI3F1ZVsQoZSuwQbsWroBdU1NZqjrudLlRrXQ5RK6REkDR2G3q0slgWQzLJ48S1H70Fuiq468H4wJAw4BQdiuWYEs6TOe6D6QqdQLh95qniv6noW+mBNjsqX9mJLQr2LxQtyDde7g96gx5tG+mTKHXPKwptrOIT2BZaKhA4AIhaAiAUgYgEMeinMxGG+RuJm07xtRt5Dl8dgsWI+QAgT/+hr5egK9M7wHqE4MgwD0OqpiAWQzGdxU9fdNjT4LCWn7EIVDr6ENk3N0WLxetUo++Bnodkh8v/PpELPmKXsIYIta2jJMULVQalZXzQugS+Pof1XIXoXK1SvurpXxTDVT4UOrVQeifs+XjPXbYyNLzqyO8a6hWSukkP9pQSlACIWgIgFIGIBjH6PtA4naN7qS60OWo5O0cpTCrTccsxCrAxDABELIJnPoqViTV+byGNx9Un4kvYqHLytfamPktB/bSoLGkRtyHcAAAAASUVORK5CYII="
                        x="0"
                        y="0"
                        width="75"
                        height="75"
                        preserveAspectRatio="none"
                        transform="matrix(0.0133333 0 0 0.0747566 0 -2.30337)"
                        crossOrigin="anonymous"
                    />
                </pattern>
                <pattern
                    id="grey_army"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <image
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMKSURBVHgB7Zw/bsIwFMbdqidAvQMnYKrUgYULMLLCiHoChp4AMcLKyAVYkTpxAu6AuEIrR7hyHontLzGO7bzf0iYqKXx5fn7/wst4PP4Vd2azmdA5n8/CxOVyES7Q61L2+33xc7lcGv9us9mUjq+nU+n4+3CAXo/yJpgCKjzl/fOz32KVLLnCqlfTaem4lVj0bkj1c8abZdn8xe12E6mT1DKkG8Xa4md88yoYZ1gsABYLIAqfpXbVlWF3tQW2IehdnNVGdF6GAEbLGo1GpeP1YiH6TLBlqJJlnavnOImmJ74zCl6GAEk7+K/t9v/3Ksv1TUks+g9j2K5jgutZBqjPCyLW8XgUw+Hw4bw697Pblc6HqmBUXce0nCGxdB9hu3COeLMsU327yqpCYKvpoxYKizUYDITpzbRtCrjg26JdPxPHWQCFZdVF0qoSSX1VF9DonBKi/s+WBeA9dKiyUpuDT6UrlE1Q2iTbcO2EK5zE0ncf1wvnCPssgGSX4cd8XjqmQyy0cOmDXiXSMkfVURuPOj+ZTIyvj0qs2EtC7LMAWCyAIMtQ1atcg89YJ27YsgCy3g2lheoBddu6GiyWqV51DTwvZaKqIWwTy1aLcxbLZUDVFd8VzFAUYqWQ9cua2rNr/nU3kSulDfDq4HOfVmbLAvBmWTSvy7GnGHWcZZoH66IX+SBW7bZ+P2/rsoRCplB1PvJZ8V7SETx6Y1WOSlt7epPVROdi0YKcjqyG0qGRLnl7ZsGtdjkk2vTg0AGAxQJgsQBYLICsi38qDjNtYraH5vX2GCyWyxuwoeIfea0QkbhrHGWDl6EFvXrKYgF481nU1ItURAs+Y8kp25CEg49hTFPSWCxar+rD3NaDWKbEtgtiKlXDlpVbcoyQdFCq+ovKJdCYDZ2/stG5WLZ6VVTLUN4VfWnR8cOmUN9Hr6vGGJt+RUrVIyTP8Ld6psJBKQCLBcBiAbBYAL1/RlqGE3reakqtkhk58oFebmnSiOVlCMBiAXjzWXqpWNLVQ+SuNHE9STj4qvGlLkpCf3Oa+2qqaI6GAAAAAElFTkSuQmCC"
                        x="0"
                        y="0"
                        width="75"
                        height="75"
                        preserveAspectRatio="none"
                        transform="matrix(0.0133333 0 0 0.0747566 0 -2.30337)"
                        crossOrigin="anonymous"
                    />
                </pattern>
            </defs>
            <path d="M65.3965 0C64.7976 3.57742e-07 64.2036 0.022054 63.6152 0.0634766C55.9801 0.762362 50 7.18262 50 15V60C50 67.6083 55.6649 73.8931 63.0068 74.8682H216.993C224.335 73.8933 230 67.6085 230 60V15C230 7.18207 224.019 0.761613 216.383 0.0634766C215.795 0.022178 215.202 1.14289e-05 214.604 0H268.119L263.366 5L275.247 17.5L263.366 24.7168L280 34.8203L264.381 44.3066C264.001 46.3762 263.453 48.3865 262.749 50.3223L270.449 55L258.614 62.1895L272.871 70.8496L258.614 74.8682H240V75H40V74.8682H21.3857L7.12891 70.8496L21.3857 62.1895L9.55078 55L17.25 50.3223C16.5456 48.3864 15.9967 46.3763 15.6172 44.3066L0 34.8203L16.6338 24.7168L4.75293 17.5L16.6338 5L11.8809 0H65.3965Z" fill={data?.side}/>
        </svg>
    )
}

export default SevenSide02