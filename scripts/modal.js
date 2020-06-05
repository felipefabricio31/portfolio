$(document).ready(function () {
  // MODAL
  var modalText = {
    sorveteria: {
      title: "Sorveteria ki Sabor",
      tag: "Sistema web para controle de vendas/estoque.",
      detail:
        "Sistema desenvolvido para controlar todo o processo da sorveteria, iniciando na fabricação até a venda interna e externa, após uma venda é gerado um cupom do tipo não fiscal. O sistema fornece relatórios de todos os processos para auxiliar nas tomadas de decisões.",
      link: "",
    },
    automotivo: {
      title: "Centro Automotivo",
      tag: "Sistema web para controlar ums centro automotivo.",
      detail:
        "Sistema desenvolvido para controlar todo o processo de um centro automotivo, desde os cadastros até a emissão de relatórios.",
      link: "",
    },
    agenda: {
      title: "Agenda Web",
      tag:
        "Sistema web desenvolvido para o setor de logística de uma rede de supermeracados.",
      detail:
        "Este sistema web é responsável por realizar o controle dos agendamentos e encaixes de todas lojas de uma rede de supermercado.",
      link: "",
    },
    medquest: {
      title: "Agenda Comercial",
      tag: "App desenvolvido para gerenciamento das visitas e eventos.",
      detail:
        "O App Agenda Comercial, permite o usuário realizar agendamentos de visitas, cadastrar médicos e empresas, registro de visitas com foto do local, localização de forma automática e a assinatura digital do responsável, após o registro o app gera diversos relatórios para auxiliar na tomada de decisões.",
      link: "",
    },
    bethehero: {
      title: "Be The Hero",
      tag: "Aplicativo desenvolvido para ongs.",
      detail:
        "Este projeto é direcionado para  ongs, que  podem se cadastrar na plataforma web e registrar os casos que necessitam de ajuda financeira. Os casos cadastrados aparecerão no aplicativo aguardando possíveis padrinhos, após a aceitação de um padrinho, o aplicativo informa a ong responsável através de um email ou por whatsapp.",
      link: "",
    },
    funeraria: {
      title: "Funerária",
      tag: "Template desenvolvido para o gerenciamento de funerária.",
      detail:
        "Este sistema é responsável por gerenciar todo processo de uma funerária, desde o cadastro de dependentes, controle do plano até a realização do pagamento.",
      link: "https://felipefabricio31.github.io/funeraria-frontend/home.html",
    },
    flexblog: {
      title: "FlexBlog",
      tag: "Site desenvolvido para apresentação dos recursos de FlexBlog.",
      detail:
        "Este site foi construido utilizando todos os conceitos de flexbox (estudos).",
      link: "https://felipefabricio31.github.io/flexblog/",
    },
  };

  $("#gallery .button").on("click", function () {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    // slideWidth = 1010,
    threshold = slideWidth / 5,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function () {
    shiftSlide(-1);
  });
  $("#prev").click(function () {
    shiftSlide(1);
  });

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function () {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);

    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    //
    $.each($("#modal .slide"), function (index, value) {
      $(this).css({
        // background:
        //   "url('img/slides/" + id + "-" + index + ".jpg') center center/cover",
        background: "url('img/slides/" + id + "-" + index + ".jpg') ",
        // backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "contain",
        paddingTop: "10px",
        // paddingBottom: "10px",
        // backgroundAttachment: "fixed",
      });
    });
    //
  }
});
