
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
 
        $(document).ready(function() {
            // Real-time preview
            $('#name').on('input', function() {
                $('#namePreview').text($(this).val() || '-');
            });
            $("#university").on('input',function(){
                $("#universityPreview").text($(this).val() || '-');
            });

              $('#pata').on('input', function() {
                $('#pataPreview').text($(this).val() || '-');
            });
            
            $('#studentId').on('input', function() {
                $('#studentIdPreview').text($(this).val() || '-');
            });
            
           
            $('#validUntil').on('change', function() {
                $('#validUntilPreview').text($(this).val() || '-');
            });

            // Photo preview
            $('#photo').on('change', function(e) {
                if (e.target.files && e.target.files[0]) {
                    let reader = new FileReader();
                    reader.onload = function(e) {
                        $('#photoPreview').css({
                            'background-image': 'url(' + e.target.result + ')',
                            'background-size': 'cover',
                            'background-position': 'center'
                        }).empty();
                    }
                    reader.readAsDataURL(e.target.files[0]);
                }
            });

            // Download functionality
            $('#downloadBtn').click(function() {
                html2canvas(document.querySelector('.id-card')).then(canvas => {
                    let link = document.createElement('a');
                    link.download = 'student-id.png';
                    link.href = canvas.toDataURL();
                    link.click();
                });
            });
        });
   
