function EightButton({data}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="209" height="39" viewBox="0 0 209 39" fill="none">
            <g clipPath="url(#clip0_44_227)">
                <path d="M4.5 9.5C6.98528 9.5 9 7.48528 9 5C9 2.51472 6.98528 0.5 4.5 0.5C2.01472 0.5 0 2.51472 0 5C0 7.48528 2.01472 9.5 4.5 9.5Z" fill={data?.button}/>
                <path d="M4.5 38.5C6.98528 38.5 9 36.4853 9 34C9 31.5147 6.98528 29.5 4.5 29.5C2.01472 29.5 0 31.5147 0 34C0 36.4853 2.01472 38.5 4.5 38.5Z" fill={data?.button}/>
                <path d="M204.5 9.5C206.985 9.5 209 7.48528 209 5C209 2.51472 206.985 0.5 204.5 0.5C202.015 0.5 200 2.51472 200 5C200 7.48528 202.015 9.5 204.5 9.5Z" fill={data?.button}/>
                <path d="M204.5 38.5C206.985 38.5 209 36.4853 209 34C209 31.5147 206.985 29.5 204.5 29.5C202.015 29.5 200 31.5147 200 34C200 36.4853 202.015 38.5 204.5 38.5Z" fill={data?.button}/>
            </g>
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
            <defs>
                <clipPath id="clip0_44_227">
                <rect width="209" height="38" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default EightButton

