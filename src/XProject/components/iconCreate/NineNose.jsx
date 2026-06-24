function NineNose({data}){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="85" height="111" viewBox="0 0 85 111" fill="none">
            <g clipPath="url(#clip0_44_235)">
                <path d="M69 80.5H17V110.5H69V80.5Z" fill={data?.noiseDown}/>
                <path d="M65 0.5H20C14.4772 0.5 10 4.97715 10 10.5V25.5C10 31.0228 14.4772 35.5 20 35.5H65C70.5228 35.5 75 31.0228 75 25.5V10.5C75 4.97715 70.5228 0.5 65 0.5Z" fill={data?.noiseUp}/>
                <path d="M0 35.5C0 29.9772 4.47715 25.5 10 25.5H75C80.5229 25.5 85 29.9772 85 35.5V60.5C85 71.5457 76.0457 80.5 65 80.5H20C8.9543 80.5 0 71.5457 0 60.5V35.5Z" fill={data?.noiseHalf}/>
                <path d="M47 3.5H39C37.3431 3.5 36 4.84315 36 6.5V10.5C36 12.1569 37.3431 13.5 39 13.5H47C48.6569 13.5 50 12.1569 50 10.5V6.5C50 4.84315 48.6569 3.5 47 3.5Z" fill={data?.noiseButton}/>
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
                <clipPath id="clip0_44_235">
                <rect width="85" height="110" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
            </defs>
        </svg>
    )
}

export default NineNose

